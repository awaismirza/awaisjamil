# Selling WordsCut

The owner wants a paid Mac product sold through awaisjamil.com. No price, billing period, refund policy, checkout account or proprietary licence has been approved or activated. No checkout currently takes money.

## Smallest launch path

Use the WordsCut product page on awaisjamil.com with a **Buy WordsCut** button linking to a hosted **Lemon Squeezy** checkout. Upload the verified signed DMG as a customer download; include the matching application/dependency sources for the existing AGPL/GPL build. Customers receive a purchase receipt and access to their files. Optional licence keys are available, but generating a key does not make the app enforce activation: that would need a separate app change and explicit privacy/offline-use decisions.

Lemon Squeezy's documentation covers [hosted checkout](https://docs.lemonsqueezy.com/help/checkout), [digital files, receipts and licence keys](https://docs.lemonsqueezy.com/help/products/adding-products), and its role as [merchant of record](https://docs.lemonsqueezy.com/help/payments/merchant-of-record). It handles payment collection and sales-tax/VAT responsibilities described there. Account activation, identity/payout details, current eligibility/fees and contractual acceptance require the owner's participation. No account, fee or contract was accepted by the agent.

The owner chooses the amount/currency, one-time purchase versus subscription, update entitlement, support/refund terms and customer files. A one-time price for an initial release is operationally simpler than a subscription; this is a suggestion, not a published offer. Test checkout, receipt and customer access before switching the site CTA.

## Stripe alternative

**Stripe Payment Links** is a straightforward hosted payment page and can be linked from the same site. A Payment Link does not by itself implement protected installer delivery or app licensing. For automatic delivery, add a server endpoint that verifies Stripe webhook signatures, fulfils successful payments idempotently, handles delayed payment success/refunds, and sends a customer-specific or expiring download link. Do not rely on the customer visiting a success URL; never redirect to a public DMG on Pages or a published GitHub release. GitHub Pages cannot run that payment webhook server.

Stripe's official [fulfilment guide](https://docs.stripe.com/checkout/fulfillment) explains the server/webhook path. That integration would need a backend, private file storage and email delivery. The merchant-of-record service is the shorter route for this downloadable app if the owner does not already have those systems.

## Paid does not automatically mean proprietary

The current WordsCut code and retained 1.0.0 release are labelled AGPL-3.0-or-later. The [GNU licence FAQ](https://www.gnu.org/licenses/gpl-faq.en.html#DoesTheGPLAllowMoney) permits charging for copies and downloads. Recipients still keep the applicable source-code, modification and redistribution rights; a charge cannot remove them. The existing release can be sold with the matching source at no extra charge, but cannot honestly be described as a closed-source proprietary build.

The [copyright-holder FAQ](https://www.gnu.org/licenses/gpl-faq.en.html#ReleaseUnderGPLAndNF) explains that a copyright owner can offer their own code under additional licences. Before a future proprietary release, verify ownership of every original contribution or obtain needed permissions, audit actual Rust/JS/Swift dependencies, and resolve the bundled FFmpeg/x264 and other native dependency obligations. Separate-process bundling is not a blanket permission to ignore those licences. Preserve required notices and source offers/packages. Deleting a repository does not revoke rights already granted to earlier recipients.

No application licence file has been changed in this migration, and no proprietary EULA, artificial activation restriction or live price has been added. A future commercial release needs that ownership/dependency decision before its source delivery can be changed.
