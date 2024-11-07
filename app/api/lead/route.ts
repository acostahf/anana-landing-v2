import { NextResponse, NextRequest } from "next/server";
import { createRouteHandlerClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";

// This route is used to store the leads that are generated from the landing page.
// The API call is initiated by <ButtonLead /> component
export async function POST(req: NextRequest) {
    const body = await req.json();

    if (!body.email) {
        return NextResponse.json(
            { error: "Email is required" },
            { status: 400 }
        );
    }

    try {
        const supabase = createRouteHandlerClient({ cookies });
        await supabase.from("leads").insert({ email: body.email });

        return NextResponse.json({});
    } catch (e) {
        console.error(e);
        console.log("Error: ", e.message);
        return NextResponse.json({ error: e.message }, { status: 500 });
    }
}

export async function GET() {
    const supabase = createRouteHandlerClient({ cookies });

    let { data: leads, error } = await supabase.from("leads").select("*");

    if (error) {
        return NextResponse.json(
            { error: error.message },
            { status: 500 }
        );
    }
    let totalLeads = leads ? leads.length : 0;
    return NextResponse.json(totalLeads);
}
