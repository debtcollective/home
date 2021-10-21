/** WORK IN PROGRESS
 * this doesn't work yet, making first faq .active for now
 * to show as example and will revisit later
 */
declare global {
  interface Window {
    dc: any;
  }
}

export default (function (dc) {
  dc.faqs = {
    activeFAQ: null
  };

  dc.faqs.initialize = function () {
    const faqs = document.querySelectorAll('.wp-block-site-functionality-faq');

    faqs.forEach(function (item) {
      item.addEventListener('click', function (e) {
        e.preventDefault();
        dc.faqs.onFAQClicked(item.id);
      });
    });
  };

  dc.faqs.onFAQClicked = function (id: string) {
    if (dc.faqs.activeFAQ && dc.faqs.activeFAQ.id !== id) {
      dc.faqs.hideFAQ(dc.faqs.activeFAQ);
    }
    dc.faqs.activeFAQ = document.getElementById(id);
    dc.faqs.toggleFAQ(dc.faqs.activeFAQ);
  };

  dc.faqs.toggleFAQ = function (el: HTMLElement) {
    el.classList.toggle('active');
  };

  dc.faqs.hideFAQ = function (el: HTMLElement) {
    el.classList.remove('active');
  };
})((window.dc = window.dc || {}));
