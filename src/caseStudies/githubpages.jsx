import React from 'react';

const GithubPages = () => (
  <>
    <p>
      In mid April 2020 I volunteered to help with the development work on a
      website which would display the signings made by the Cognitive Practice in
      GBS. The main requirements were:
    </p>
    <ul>
      <li>SSO authenticated webpage</li>
      <li>Be able to see current signings and the current total signings</li>
      <li>
        Be able to see the practice working towards clear (incentivised)
        signings goals
      </li>
    </ul>
    <p>
      The last two requirements were pretty straight forward but the first one
      presented some technical challenge. Onboarding onto the company&apos;s SSO
      solution was very challenging and would not be possible within the scope
      of the volunteer work.
    </p>
    <p>
      The company did have a drag and drop wiki generator which was already
      onboarded with the SSO solution. This allowed boiler plate content and
      this was limited. Our main stake holder was keen that this would be a fun
      UI which would make users want to come back for more (add a non-functional
      requirement to our list) so this wiki generator was not suitable.
    </p>
    <p>
      However, the company had an enterprise version of github which is already
      within the SSO solution. A lesser known capability of github is it allows
      minimal webpage hosting. This is predominantly to host wikis to support
      repos but it can be used to host blogs or any other content which is
      static and doesn&apos;t need a custom application server.
    </p>
    <p>
      There are some automatic pages that github allows you to spin up with a
      button press that you can access on your github repo&apos;s settings page.
      Just click on the &quot;Launch page generator&quot; to go through an aided
      step by step process, including picking some preconfigured theme
    </p>
    <p>
      Alternatively you can select a specific docs branch or your main branch
      and github will look for an index.html file and will show any one that
      goes to a github pages link on your repo the contents of that index.html
      file. It will generate the link automatically and when it has published
      your site it will display it in the same github pages section of the
      settings.
    </p>
    <p>
      Because github pages can only display the content of an index.html, or any
      linked html file you are limited by what can be hosted on just the front
      end of a website. There are no back end data sources possible unless you
      are prepared to store api authentication tokens/passwords in your github
      repo where other people can view them.
    </p>
    <p>
      For the cognitive signings tracker I used Vue.js in its vanilla form which
      is recommended for proof of concept work which allows me to create a one
      page website with support for functional methods and dynamic content.
    </p>
    <p>
      Seeing the potential with github pages I then additionally investigated
      its use for my own uses.
    </p>
  </>
);

export default GithubPages;
