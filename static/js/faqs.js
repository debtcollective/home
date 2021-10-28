if( typeof window !== undefined ) {

  // hashquery
  !function(n){"use strict";function t(){return window.location.hash.substr(1)}function o(){history.pushState("",document.title,window.location.pathname+window.location.search)}function e(n){if(!n||"#"===n)return void o();window.location.hash=n}function r(n){var t=n?n.split("&"):[],o={};return t.forEach(function(n){var t=n.split("="),e=decodeURIComponent(t[0]);if(e){var r=decodeURIComponent(t[1]);o[e]=r}}),o}function i(n){var t="";for(var o in n)if(o){var e=n[o];t+="&"+encodeURIComponent(o)+"="+encodeURIComponent(e)}return t.substr(1)}function u(n){return r(t())[n]}function c(n,o){var e=t(),u=r(e);return u[n]=o,"#"+i(u)}function a(n,t){e(c(n,t))}function f(n){var o=t(),e=r(o);return delete e[n],"#"+i(e)}function s(n){e(f(n))}n.get=u,n.set4Href=c,n.set=a,n.del4Href=f,n.del=s}(this.hashquery=this.hashquery||{});

  (function(dc, hashquery) {

    dc.faqs = {
      activeFAQ: null
    }

    dc.faqs.initialize  = function(selector) {
      var faqGroups = document.querySelectorAll(selector)
      faqGroups.forEach(function(faqGroup) {
        var faqs = faqGroup.querySelectorAll('.faq')
        var fdls = faqGroup.querySelectorAll('.faq-deep-link')
        faqs.forEach(function(item) {
          item.addEventListener('click', function() {
            hashquery.set('faq', item.id)
            dc.faqs.onFAQClicked(item.id)
          })
        })
        fdls.forEach(function(item) {
          item.addEventListener('click', function() {
            // waits a bit to make sure the hash has changed before firing handleDeeplink
            setTimeout(dc.faqs.handleDeeplink, 300)
          })
        })
      })
      dc.faqs.handleDeeplink()
    }

    dc.faqs.handleDeeplink = function() {
      var faqHash = hashquery.get('faq')
      if (faqHash) {
        dc.faqs.onFAQClicked(faqHash)
        //console.log( 'document.getElementById(faqHash)', document.getElementById(faqHash) )
        setTimeout( function() {
          // not setting a await was causing some weird stuff!
          document.getElementById(faqHash).scrollIntoView()
        }, 600)
      }
    }

    dc.faqs.onFAQClicked = function(id) {
      if (dc.faqs.activeFAQ && dc.faqs.activeFAQ.id != id) {
        dc.faqs.hideFAQ(dc.faqs.activeFAQ)
      }
      var activeFAQ = dc.faqs.activeFAQ = document.getElementById(id)
      dc.faqs.toggleFAQ(activeFAQ)
    }

    dc.faqs.toggleFAQ = function(el) {
      if (el) {
        el.classList.toggle('active')
      }
    }

    dc.faqs.hideFAQ = function(el) {
      if (el) {
        el.classList.remove('active')
      }
    }

    dc.faqs.showFAQ = function(el) {
      if (el) {
        el.classList.add('active')
      }
    }

  }(window.dc = window.dc || {}, window.hashquery));
  // instantiated in gatsby-browser.js
}
