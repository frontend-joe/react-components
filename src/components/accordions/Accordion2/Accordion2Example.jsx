import { Accordion2 } from "./Accordion2";
import "./Accordion2Example.css";

const faqs = [
  {
    header: (
      <div className="accordion-2-header">
        <span class="material-symbols-outlined">mail</span> Delivery
      </div>
    ),
    content: `We process and ship all orders within 1–2 business days. Standard delivery takes 3–7 business days. Express shipping is available. Tracking information will be emailed to you once your order has been dispatched.`,
  },
  {
    header: (
      <div className="accordion-2-header">
        <span class="material-symbols-outlined">credit_card</span> Returns &
        Refunds
      </div>
    ),
    content: `Returns are accepted within 30 days for unworn, unwashed items with original tags. Use our Returns Portal to begin. Refunds are issued within 5–10 business days after we receive and inspect the returned item.`,
  },
  {
    header: (
      <div className="accordion-2-header">
        <span class="material-symbols-outlined">warning</span> Order Issues
      </div>
    ),
    content: `If your order is incorrect, missing items, or arrived damaged, contact our support team within 7 days. Include your order number and any photos so we can resolve the issue as quickly as possible.`,
  },
  {
    header: (
      <div className="accordion-2-header">
        <span class="material-symbols-outlined">package_2</span> Products &
        Stock
      </div>
    ),
    content: `We restock popular products regularly. If something is sold out, use the “Notify Me” feature for updates. Each product page includes a size guide to help you choose the best possible fit.`,
  },
];

export const Accordion2Example = () => (
  <section className="page accordion-2-page">
    <div className="accordion-2-card">
      <Accordion2 items={faqs} />
    </div>
  </section>
);
