import React from 'react';

const GirlsWhoCode = () => (
  <>
    <p>
      For two months in 2019 I mentored a team of 5 13-15 year old girls in
      making an AI based technology. This was part of the joint IBM and
      Disney/Marvel challenge called Girls Who Change the World which tasked
      11-14 year old girls with proposing a technical solution which used AI to
      make the world a better place. After thousands of applicants the proposals
      were shortlisted and the shortlisted teams were given a technical and
      business mentor to go away and build a prototype of the solution. On the
      4th July we had a judging ceremony where the teams presented their
      solution and their prototype to a business and technical judging panel.
    </p>
    <p>
      I was the technical mentor for a team from a London Girl&apos;s School.
      The team name was Dimming Dyslexia. They wanted to dim the impact that
      dyslexia has on teenage students. Their research found that most apps to
      support dyslexic students are targeted at younger students. They wanted to
      create resources for teenagers and adults.
    </p>
    <p>Their user stories were:</p>
    <ul>
      <li>
        The user will be able to take a photo of their text book and then edit
        the text into dyslexic readable fonts like Mono Dyslexic and change the
        colours to make the text easier to read
      </li>
      <li>
        The user will be shown related content to their text book from Youtube,
        BBC news and dictionaries.
      </li>
      <li>
        The user will be shown computer generated videos of the text book
        content
      </li>
    </ul>
    <p>
      For me there were some clear steps that were valuable for the team and
      could give them insight into what working in technology is actually like,
      steps which many young women may not realise are just as important as the
      technical challenges of building a solution. They were:
    </p>
    <ul>
      <li>
        recognising the functional and non-functional requirements and
        prioritising the backlog
      </li>
      <li>paper prototyping and medium fidelity prototyping</li>
      <li>user testing</li>
    </ul>
    <p>
      Personally I think these three tasks were the most exciting and useful for
      the team and worked really well as tasks in the first two weeks.
      Recognising the functional requirements in particular was really important
      as the team had varied ideas about what they were making, and helping them
      to understand the impact of the time constraints on the project and what
      would be achievable.
    </p>
    <p>
      Initially the team were interested to build the app in python which they
      had experience using at school. I was able to find a tool (Anvil) which
      would allow for this. I created an example app to start them off.
      Unfortunately, the team did not feel confident in building the app in
      python and decided instead to build the front end using html and css
      (mark-up languages which they had never used before but which their ICT
      teacher&apos;s recommended). I wrote them a bare bones express server app
      which they could add their own html to.
    </p>
    <p>
      I spent a lot of time and attention of writing the Readme to be
      understandable to a team of developers who had never experienced any of
      the technologies involved. I also create a follow along tutorial for
      running the application. With the team in mind I completed the tutorial on
      a windows device. I think the application could be reused by any junior
      developer to get up to speed with express server web hosting
    </p>
    <p>
      I clearly still needed to provide more support, and should I do this again
      I would recommend other tools, for example NodeRED, which with its UI
      interface they may have found easier.
    </p>
    <p>
      Overall the team left the program with experience of talking confidently
      about technology and their technical challenges. They left the technical
      assessment part of the day clearly feeling a sense of achievement.
    </p>
  </>
);

export default GirlsWhoCode;
