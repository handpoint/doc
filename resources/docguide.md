Internal note: Worldpay (VANTIV) is only certified with HILITES (not with PAX)

On the get-started page:

Promote Handpoint functionalities with use-cases/possible use-cases before 'start your integration'.

Add a link to supported devices. Also under references, make sure that supported devices is the first link and the 2nd link is acquirer matrix.

resources from Jody we can use to improve the documentation, the following paragraphs is how we market Handpoint on our main website:

"Build in-person payments around the way your merchants actually work.
Connect your software to a branded payment terminal. Put your application directly on an Android payment device. Build payment into the merchant workflow before, during and after the card is presented. Handpoint gives software companies the tools to create the physical payment experience their product and their merchants actually need.
CTA: Explore integration options | Talk to Handpoint
REST API · Android SDK · Standalone · Branded payment apps · 20+ terminal models*

Your merchants didn’t choose your software because they needed a card reader.
They chose it to run their business better.
A restaurant wants orders in the kitchen faster, fewer trips back and forth by waitstaff, checks closed without making guests wait, less manual tip work at the end of the shift and faster table turns.
A field-service business wants the technician to finish the job, take payment and move on - not create an invoice that someone in the office has to send, track and chase for the next 30 days.
A retailer or self-service operator wants more checkout capacity when demand peaks. An event operator has a few hours to complete as many transactions as possible.
Payment is part of those workflows. Where it happens, what happens around it, what the employee and customer see, and what your software can do with the transaction afterward all affect how well the business operates.
That’s why Handpoint starts with the merchant workflow - not the card reader.

One payment platform. Four ways to meet the customer in person
There is no single best way to integrate in-person payments. The right answer depends on what your software and merchant are trying to accomplish.

Connect your software to the terminal - REST API
Your software initiates the payment. Handpoint handles the secure payment interaction on the terminal and returns the result. At its simplest, your software can send the amount, currency and transaction type.
REST does not mean generic. Give Handpoint your logo, colors and brand details and the Handpoint payment application can carry your brand without requiring your developers to build an on-terminal application.

Make the terminal part of your software - Android SDK Native Integration
Sometimes the best payment experience is your software running on the payment device. Embed Handpoint’s Android payment libraries inside your application and keep control of the UI, UX and merchant workflow while Handpoint handles secure payment functionality underneath.
Build tableside ordering, mobile POS, field-service applications, ticketing, parking, self-service and other purpose-built experiences on supported PAX Android payment terminals.

Take an mPOS to the field - Bluetooth to HiLite with Android SDK
XXXX

Let the terminal simply be a terminal - Standalone
Not every workflow needs software controlling the transaction. Some merchant environments simply need a strong standalone payment terminal without introducing an unrelated payment stack.

You don’t have to choose just one.
REST at the counter. Android in the field or at tableside. Standalone where that makes sense. A single merchant can use different physical payment experiences while staying on the same underlying Handpoint platform.

One restaurant. Four payment experiences.
TableTurn shows what this flexibility can look like inside one merchant operation.
Tableside: A ruggedized PAX A6650 can run the restaurant application natively with the Handpoint Android SDK, so ordering and payment function as one workflow.
Waitstand: The same restaurant can run cloud POS on a large touchscreen with a smaller wired terminal connected through Handpoint REST.
Customer-facing: Another Android device can respond to the POS and securely handle payment inside the restaurant platform’s own UI/UX.
Back office: Eligible payment operations such as tip modifications can continue from the software after the guest has left the terminal.
Tips, tip adjustments, partial reversals, preauthorizations, transaction status and tokens can stay connected across the experience.
Those are not four unrelated payment integrations. They are four parts of one merchant operation.
Proof module: TableTurn - publication wording/permissions to verify.

The terminal can be more than where the customer taps.
Make it yours. Put your brand on the payment experience even with a straightforward REST integration.
Connect it. Make payment a seamless step inside the workflow your software already controls.
Build on it. Turn supported Android payment hardware into another place your software can run.
Redesign the workflow around it. Combine application, payment, mobility, printing and other device capabilities to remove steps and devices.
Three devices became one.
Bump 50:50's original stadium raffle solution used a tablet, a small mobile payment terminal and a Bluetooth printer. With Handpoint and PAX Android, Bump could consolidate its application, secure payment and customized raffle-ticket printing onto one purpose-built handheld.
The solution also supports demanding stadium communications environments, BIN-based routing and Canadian Interac requirements. A few thousand terminals have been deployed across professional sports venues in the U.S. and Canada.*
That’s the difference between integrating a card reader and designing a product.
*Customer/deployment claims subject to final publication approval.

Choose the device for the job - not the job for the device.
Your merchants work at tables, in homes, parking lots, stadium aisles, reception desks, kiosks, counters and outside. Handpoint supports 20+ terminal models across form factors so the physical device can fit the environment you’re designing for.*
A compact wired device can make sense beside a fixed POS. A ruggedized handheld can make sense in a restaurant, parking lot or field-service environment. An all-in-one Android device can replace separate application, payment and peripheral hardware.
Because your software integrates with Handpoint rather than independently with each supported terminal model, adding a supported form factor doesn’t have to mean inventing another payment integration.
*Supported device count to verify immediately before publication.

Your software can do more than start the transaction.
A truly integrated payment does not disappear into the terminal after the customer presents a card. Handpoint gives your software ways to continue working with the payment as part of the merchant workflow.
Shape the transaction. Support flows such as preauthorizations, incremental authorizations, tips, tip adjustments, Multi-MID and other merchant-specific requirements.
Use card intelligence. Use BIN information for supported routing, debit/card-type rules and other payment decisions.
Bring back a token. Return supported payment tokens from an in-person transaction so the software can connect the card-present interaction to eligible later workflows.
Know what happened. Query transaction status when a connection fails or the software is uncertain whether the payment succeeded.
Modify what happened. Support eligible voids, reversals, partial reversals, refunds and back-office payment operations without forcing every action back through the original physical workflow.
Keep the transaction connected. Use transaction data and feeds to connect payments to your own reporting, support tools and back-office experience.
The point is not to expose merchants to more payment complexity. It is to let your software absorb that complexity and turn it into a better workflow.

Build the payment around the work.
The most valuable in-person payment experiences often improve the operation around the transaction, not just the checkout screen.
Restaurant - Build ordering and payment into tableside. Merchant outcome: Fewer trips by staff, faster check close, less manual tip work and faster table turns.
Field service - Collect payment when the job is completed. Merchant outcome: Cash arrives sooner and the merchant spends less time creating and chasing invoices.
Sports & events - Combine application, payment and ticket printing on one handheld. Merchant outcome: Fewer devices and faster transactions during the limited window when every transaction matters.
Self-service - Add another place for the customer to complete checkout. Merchant outcome: More capacity during peak periods without requiring another staffed lane.
Customer service - Let staff find and modify eligible transactions from the software. Merchant outcome: Resolve mistakes and partial refunds faster without hunting for the original terminal.

When the happy path ends, your product should keep working.
Basic terminal integrations look easy in a demo. Real merchants create the edge cases.
·       The network drops after the card was presented. Did the transaction succeed?
·       The restaurant needs to adjust the tip after the guest leaves.
·       A merchant needs a partial reversal because one item was wrong.
·       Different locations or business units need different MIDs.
·       The card presented should route differently based on BIN or market rules.
·       The merchant needs a token from the in-person transaction for an eligible later payment workflow.
·       Support needs to understand what happened without standing in front of the terminal.
Handpoint is built for the requirements that show up after “send an amount to a terminal” stops being enough.
Deep link: Explore payment capabilities →

Start simple. Don’t integrate into a dead end.
Maybe today you need exactly this: when the user clicks Pay in your software, send the amount to the terminal and tell us whether it succeeded.
Start with REST. Brand the terminal. Ship it.
If tomorrow’s merchant requirement calls for another form factor, a native Android experience, tokens, Multi-MID, a more sophisticated workflow or another supported market, you’re still building on Handpoint.
The architecture underneath that flexibility - including how Handpoint supports terminal, processor and market evolution - belongs on the Platform page.
Deep link: See how the Handpoint platform works →

Build what your merchants actually need.
Your merchants already chose your software to help them run their businesses. Don’t let the payment terminal determine what that software can do.
Tell us how your merchants work, where payment happens and what you wish the workflow could do. We’ll help you figure out the right way to build it.
CTA: Talk to Handpoint | Explore the APIs & SDKs"

in the get-started page add 'how do I get started?' -> reference a guide, that suggests with vertical examples and use-cases what is the best integration-path, note to the ISV that they are not limited to a single integration-path and can do multiple different solutions or merge them eg doing a iOS Hilite and merge with backoffice or have an iOS Hilite for some use cases while also having an Android SDK with PAX for other use case of the same merchant or multiple merchants they support.



Sale with tip should be visible through all acquirer functionalities as all acquirers support this.

Backoffice operations are always supported regardless of the main 'integration path' selected on top. As long as the acquirer supports the functionality.
Eg. remote reversal (backoffice) is supported on all acquirers however remote sale is only supported on acquirers that support MOTO (not Paysafe...) same applies to pre-auths...
Regarding pre-auths -> add backoffice reversal in example codes, the same for pre-auth capture and pre-auth capture reversal... and lets draft a pre-auth guide to explain different pre-auth flows and use-cases.

We want to improve the language so when an ISV is discovering and comparing Handpoint stands out as best option/choice for the flows and capabilities we support. for example we support multi-mid, with a single apiKey using externalId the ISV can support processing on different MID/accounts -> useful on complex scenarios like hair dressers, clinics with doctors that have their own MIDs, etc.

Clinic example we support today with multi-mid:
in the same TMS merchant is setup with a main MID (the clinic) and sub-mids (one for each doctor), the ISV via restAPI will identify and map a doctor to an externalId, this external ID is sent via the restAPI request to process on the doctor's own MID. Similar approach is also covered via Android SDK, where in the App you select a doctor and it mapps to the doctor's 'merchant authentication'. And a combination of both scenarios covers the full spectrum, an Android App with Android SDK (PAX) that supports 'standalone sales' manually selecting doctors and cloudAPI requests to the APP via the Android SDK (PAX). And reconciliation can be done by using txnFeed API if needed, keeping all the solution end to end fully branded to the ISV's preferences.

Then lets do an analysis of how we compete against dejavoo / stripe / payroc 
how they do their documentation (what can we copy or improve on ours based on theirs?)

AVS for MOTO -> is not supported on REFUNDS.