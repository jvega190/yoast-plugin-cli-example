document.addEventListener("DOMContentLoaded", function() {

  // title?: string – The SEO title.
  // description?: string – The SEO description.
  // keyword?: string – The main keyword.
  // synonyms?: string – The main keyword's synonyms.
  // url?: string – The slug.
  // permalink?: string – The base url + slug.
  // locale?: string – The locale.

  const getSEOData = () => {
    return {
      title: document.querySelector('title')?.innerText,
      description: document.querySelector('meta[name="description"]')?.content,
      keyword: document.querySelector('meta[name="keyword"]')?.content,
      contents: document.querySelector('body').innerHTML
    }
  };

  window.craftercms.guest.fromTopic('REQUEST_SEO_DATA').subscribe((payload) => {
    window.craftercms.guest.post({
      type: 'RESPONSE_SEO_DATA',
      payload: getSEOData()
    });
  });
});
