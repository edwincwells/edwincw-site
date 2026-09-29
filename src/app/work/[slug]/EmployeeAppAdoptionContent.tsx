import {
  ArtDirected,
  CaseStudyLayout,
  Figure,
  Heading,
  Prose,
} from "@/components/CaseStudyLayout";
import { PullQuote } from "@/components/PullQuote";

/* Prose is a Server Component — the client boundary sits on CaseStudyLayout,
   Figure and PullQuote, so the essay itself never enters the client bundle.
   AboutContent.tsx carries "use client" only because it calls useScrollReveal
   directly; the naming convention is what carries over, not the directive.

   Seven of eight visuals are built. Visual 4, the app usage chart, is an
   empty svg slot carrying its final caption until the chart lands.

   Every screenshot comes in four variants, web and mobile crossed with light
   and dark, each on a baked ground. The mobile crops are a different
   composition rather than a scaled copy, and drop a screen where the web
   version shows three, so each alt describes only what both sizes share.

   The hero is the first informative one: it is a product shot, so its alt is
   announced rather than hidden behind the decorative wrapper. */

const DIR = "/work/employee-app-adoption";

/* Dimensions read from the files, which are exported at twice the frame sizes
   in the spec. The ratios are exact: 4:3 on web, 3:4 on mobile. */
const WEB = { width: 3296, height: 2472 };
const MOBILE = { width: 1968, height: 2624 };

/* The four sources for a body figure, from its filename stem. One <picture>
   resolves to one <img>, so the single alt rides on the web-light image. */
function sources(stem: string, alt: string) {
  return {
    image: { src: `${DIR}/employee-app-${stem}-web-light.webp`, alt, ...WEB },
    mobileImage: {
      src: `${DIR}/employee-app-${stem}-mobile-light.webp`,
      ...MOBILE,
    },
    imageDark: { src: `${DIR}/employee-app-${stem}-web-dark.webp`, ...WEB },
    mobileImageDark: {
      src: `${DIR}/employee-app-${stem}-mobile-dark.webp`,
      ...MOBILE,
    },
  };
}

/* Portrait below md, where the mobile crops are 3:4; landscape above. */
const FIGURE_ASPECT = "aspect-[3/4] md:aspect-[4/3]";

const HERO_ALT =
  "Two phone screens side by side. On the left, the Home screen with a blue " +
  "header and a summary card showing 45 hours left this week, 5 shifts left " +
  "and 7 upcoming open shifts. On the right, the Rewards screen with a " +
  "summary card showing 720 points and 28 raffle tickets, above a list of " +
  "earned badges. Both screens are cropped at the bottom edge of the frame.";

export function EmployeeAppAdoptionContent() {
  return (
    <CaseStudyLayout
      eyebrow="Product Case Study"
      title="Nobody opens an app because they’re told to"
      standfirst="Making a frontline workforce app worth opening, and turning that into an operating lever for the businesses running on it"
      heroInformative
      heroVisual={
        <ArtDirected
          image={{
            src: `${DIR}/employee-app-01-hero-web-light.webp`,
            alt: HERO_ALT,
            width: 4736,
            height: 2030,
          }}
          mobileImage={{
            src: `${DIR}/employee-app-01-hero-mobile-light.webp`,
            width: 1968,
            height: 1108,
          }}
          imageDark={{
            src: `${DIR}/employee-app-01-hero-web-dark.webp`,
            width: 4736,
            height: 2030,
          }}
          mobileImageDark={{
            src: `${DIR}/employee-app-01-hero-mobile-dark.webp`,
            width: 1968,
            height: 1108,
          }}
          /* Same box as the Salli hero: full Container width, so 100vw. */
          sizes="100vw"
          aspect="aspect-[16/9] md:aspect-[21/9]"
        />
      }
    >
      <Prose>
        <p className="text-prose">
          Harri’s workforce app for shift workers has around 350,000 monthly
          active users, and until recently almost every one of them only ever
          opened it because they had to. They used it to check their rota, swap
          shifts and read announcements. It was an app of pure utility. It got
          opened at the moment of need and closed again, which produced usage
          without engagement and gave employers very little opportunity to
          develop their teams with it.
        </p>
        <p className="text-prose">
          Enter rewards and recognition. It’s a product category in its own
          right, usually sold as a standalone platform and used in parallel to
          whatever workforce app a business already runs. At Harri it’s a
          module called Rewards, sitting inside Engage360, the engagement pillar
          of the platform, which meant we could do something the standalone
          products can’t. The rewards would live in the same app as the rota,
          the clock-in and the shift pool. That made it a commercial
          opportunity and a design problem at the same time, because an
          incentive only pulls someone into the rota or the clock-in if those
          screens feel like part of the same product. What started as a new
          module led to a wider redesign of the app.
        </p>
      </Prose>

      <Heading>What we were actually competing with</Heading>

      <Prose>
        <p className="text-prose">
          We looked at other enterprise employee rewards apps to better
          understand the category. But that told us very little about how to
          design a motivating workforce experience, because none of them had to
          live alongside a shift pattern, a clock-in and a shift pool.
        </p>
        <p className="text-prose">
          That showed us where the gap was, but it didn’t tell us what good
          looked like. What mattered more was that Harri’s app sits on the same
          device as Instagram, TikTok and YouTube, and gets judged against
          those.
        </p>
      </Prose>

      <PullQuote>
        We weren’t competing with other workforce apps. We were competing with
        everything else on a crew member’s phone.
      </PullQuote>

      <Prose>
        <p className="text-prose">
          So we benchmarked against the things people open voluntarily. We
          weren’t competing with other workforce apps. We were competing with
          everything else on a crew member’s phone, and with our existing
          utility UI, we’d have lost that comparison on every screen we had.
        </p>
        <p className="text-prose">
          Two things in a workforce app could plausibly be opened without
          anyone being told to: rewards and learning. Rewards came first, and
          it was the obvious mechanism for boosting adoption of the utility
          features as well.
        </p>
      </Prose>

      <Heading>Rewards, and pointing it at the boring features</Heading>

      <Prose>
        <p className="text-prose">
          Rewards is configured by the operator, not by Harri. A client sets
          targets and campaigns against behaviours they care about, and
          employees earn points, badges and raffle tickets for hitting them.
          What matters is which behaviours they choose. Clocking in on time.
          Picking up an open shift. Responding to an ESAT survey.
        </p>
      </Prose>

      {/* Announced, unlike every other pull quote on the site: this one
          paraphrases the paragraph below rather than repeating a sentence
          from it, so hiding it would lose it from the page entirely. */}
      <PullQuote announced>
        The features nobody opens an app for are the ones their employer needs
        used the most.
      </PullQuote>

      <Prose>
        <p className="text-prose">
          Those are exactly the behaviours that utility apps struggle to get
          people doing, and they’re the ones the business most needs. So we
          crafted the game design such that the motivating layer carries the
          utility layer: the operator gets an operational instrument whilst the
          employee gets a reason to open the app and complete important
          actions.
        </p>
        <p className="text-prose">
          Clients reward their people in very different ways, especially
          between quick service and full service, so Rewards has two
          currencies. Points are earned against ongoing targets and spent in a
          marketplace on whatever the employee chooses. Raffle tickets are
          earned in time-limited campaigns, like hitting a limited-time offer
          target three weeks running, and entered into a prize draw. Clients
          can use either or both, and decide which targets pay out in which.
        </p>
        <p className="text-prose">
          Two currencies was a product requirement. How to present them was a
          design decision. Product’s first suggestion was to keep points as the
          headline balance and show tickets only inside the raffle views. We
          gave them equal weight at the top of Rewards instead, because a
          currency you can’t see is one you won’t work towards.
        </p>
      </Prose>

      <Figure
        variant="raster"
        width="wide"
        aspect={FIGURE_ASPECT}
        caption="Two currencies at equal weight. Points are earned against ongoing targets and spent in the marketplace. Raffle tickets are earned in time-limited campaigns and entered into prize draws."
        {...sources(
          "02-currencies",
          "The Rewards summary showing 720 points and 28 raffle tickets side by side, each with its own action, and a screen listing open raffles with the tickets available to enter them.",
        )}
      />

      <Prose>
        <p className="text-prose">
          We also chose not to solve for fairness between someone working forty
          hours a week and someone working twelve. Any per-hour adjustment
          would have made points harder to understand, when the earning model
          was already the fragile part. Instead we reduced how much individual
          comparison mattered. For tenure, the leaderboard can be viewed by
          points earned this week as well as all time, so a new starter isn’t
          permanently behind someone with two years’ service. For hours,
          campaigns can be set as team goals, where everyone contributes to one
          target however much they work, or as one location against another.
          That moves the competition from individuals towards teams.
        </p>
      </Prose>

      <Figure
        variant="raster"
        width="wide"
        aspect={FIGURE_ASPECT}
        caption="The leaderboard can be ranked by this week or all time, so tenure doesn’t decide who’s on top. Ways to earn was added after beta feedback showed tickets were visible but not understood."
        {...sources(
          "03-leaderboard",
          "Two phone screens. On the left, a leaderboard of team members and their points, with a sheet open offering “Points earned this week” or “Points earned, all time”. On the right, a screen listing the behaviours that earn points and raffle tickets.",
        )}
      />

      <Heading>What it changed</Heading>

      <Prose>
        <p className="text-prose">
          We dug into data from the two beta clients who ran it in early 2026:
          one quick service restaurant group in the US, and one in the UK. Late
          clock-ins fell from 4.54% to 4.21% at the US operator over 69 days,
          and from 9.8% to 7.5% at the UK one over 51 days. Neither had a
          control group and both compare a short campaign window against a
          longer baseline, so seasonality isn’t ruled out. But what makes this
          data worth something is that two unrelated businesses in two
          countries moved the same measure in the same direction.
        </p>
      </Prose>

      {/* Visual 4 is a responsive inline-SVG chart, built separately. Until
          then the slot holds the ratio of two ~4:3 panels: stacked below md,
          side by side across the 824px breakout above it. */}
      <Figure
        variant="svg"
        width="wide"
        aspect="aspect-[3/5] md:aspect-[5/2]"
        placeholder="[ Visual 4 — app usage chart, two panels ]"
        caption="App usage at participating beta locations. Left, sessions per user at the US operator as a ratio of the rest of the same estate, where 1.0 is parity. Right, monthly active users at the UK operator, indexed to January. I compared each group with colleagues in the same business over the same months, rather than with the previous year, which would have left too much unaccounted for. The US series starts in March because the account was restructured before then."
      />

      <Prose>
        <p className="text-prose">
          App usage moved too. At the US operator, participating locations ran
          at about two thirds of the rest of the estate’s sessions per user in
          spring and finished the summer above it, while the rest stayed flat.
          At the UK operator the effect showed up as more people opening the
          app rather than each person opening it more. The app usage picture is
          less settled than the clock-ins, but it points the same way at both.
        </p>
        <p className="text-prose">
          We surveyed employees at both betas, and 54 of them told us what they
          made of it. They rated Rewards 3.6 and 3.9 out of 5. They engaged with
          it and thought it was fine, but two comments mattered more than the
          rest. One crew member said they didn’t understand what tickets were or
          how to earn more, while knowing they got them for clocking in on
          time. Another said their shift covers didn’t count, because their
          manager rings them instead of using the app. The first was a
          legibility failure: we’d made tickets visible, but not understood. We
          addressed it by introducing a ‘Ways to earn’ screen. The second was
          the loop breaking due to unusual operational practices, and a
          reminder that the model only reaches behaviours that pass through the
          app.
        </p>
      </Prose>

      <Heading>Learning, and where I was wrong</Heading>

      <Prose>
        <p className="text-prose">
          Learning is the second motivating module and it’s in development now.
          It replaces Harri’s legacy LMS product, and it gives Rewards something
          new to aim at, because finishing a course becomes a behaviour a
          client can set a target against.
        </p>
        <p className="text-prose">
          It’s built around short client-filmed videos, which we call Quick
          skills rather than microlearning. Product wanted an optional question
          after each video to reinforce it. I argued against putting that
          inside a scrollable feed, because an interruption in a reel either
          annoys people or stalls them, and I proposed a library instead, where
          you choose a video, watch it, answer, and come back.
        </p>
      </Prose>

      <PullQuote>I was wrong, and my team’s prototype convinced me.</PullQuote>

      <Prose>
        <p className="text-prose">
          My team disagreed and worked on the alternative. They pointed at how
          Instagram occasionally drops a survey question between reels, mocked
          the same pattern, and made the question mandatory before the next
          video rather than optional, so the interruption I’d objected to
          became the thing that guaranteed the question got answered. I was
          wrong, and my team’s prototype convinced me. We took it to Product
          and negotiated: one question per video, text only, no images.
        </p>
      </Prose>

      <Figure
        variant="raster"
        width="wide"
        aspect={FIGURE_ASPECT}
        caption="Quick skills in a reel-style feed. The question has to be answered before the next video, one per video, text only."
        {...sources(
          "05-quick-skills",
          "A grid of short training videos with view counts, and a single multiple-choice question shown between videos in the feed.",
        )}
      />

      <Prose>
        <p className="text-prose">
          Product also wanted a Duolingo-style pathway as a main view. We
          pushed back, because there’s no single linear progression through the
          course catalogue to illustrate, and a pathway that doesn’t lead
          anywhere is just decoration. We proposed a dashboard showing
          certificates and ribbons, courses in progress and the latest Quick
          skills, and built the pathway UI to work inside each individual
          pathway, where progression is real. We left out streaks deliberately,
          because a shift worker doesn’t control their rota, and a streak
          punishes them for one their manager wrote.
        </p>
      </Prose>

      <Figure
        variant="raster"
        width="wide"
        aspect={FIGURE_ASPECT}
        caption="The Learning dashboard leads with accomplishments and courses in progress. The pathway view only appears inside a pathway, where there’s a real sequence to show."
        {...sources(
          "06-learning",
          "Two phone screens. On the left, a Learning dashboard with counts of ribbons, trophies, skills and certificates above courses in progress and a row of video thumbnails. On the right, a single pathway shown as a sequence of courses with progress marked.",
        )}
      />

      <Prose>
        <p className="text-prose">
          Three working design principles came out of this effort.
        </p>
        <p className="text-prose">
          Balance engagement against efficiency, because Harri is a work app
          and we’re optimising for the client’s outcome rather than time on
          device.
        </p>
        <p className="text-prose">
          Translate the domain terminology, so engagement feels like progress
          instead of compliance.
        </p>
        <p className="text-prose">
          Leave room for the client’s own content, because their videos and
          images carry more personality than anything we’d draw.
        </p>
        <p className="text-prose">
          These principles aren’t enshrined in the design system yet, and
          that’s deliberate. Codifying a standard before it’s been tested
          across enough of the product is how design systems end up enforcing
          early guesses. We revisit them in a weekly review with the product
          leads and lead designers instead, and we’ll formalise them once the
          pattern has earned it.
        </p>
      </Prose>

      <Heading>Taking it across the app</Heading>

      <Prose>
        <p className="text-prose">
          By this point, the moment someone crossed from Rewards into Schedule
          they left the product that earned their attention and landed in the
          one that didn’t. So we determined that the new theme treatment used
          in Rewards and Learning shouldn’t be reserved just for the modules
          that have something to celebrate. My principal designer led the work,
          with one other designer, the product manager and the engineers. I set
          the standard and made the case for spending the time, and reviewed it
          with them weekly.
        </p>
        <p className="text-prose">
          The old screens led with utility. A white header, a functional title,
          some actions, and then the details. No summary and not much
          hierarchy, which left the work of digesting it all to the person
          holding the phone. We’d already tried to fix part of this. A basic
          Home screen shipped last October, and while it stopped dropping
          people straight into Schedule, it still behaved like a detail screen
          and made you go looking for the two or three things you actually came
          for.
        </p>
      </Prose>

      <PullQuote>
        What we generalised wasn’t the playfulness. It was the structure.
      </PullQuote>

      <Figure
        variant="raster"
        width="wide"
        aspect={FIGURE_ASPECT}
        caption="Home, before and after. The old Home was a list of details. The new one opens with the week’s hours, shifts left and open shifts."
        {...sources(
          "07-home-before-after",
          "Two phone screens labelled before and after. The before screen has a plain white header above a list of shift details. The after screen has a blue header with a summary card of hours, shifts left and open shifts, above upcoming shifts and the shift pool.",
        )}
      />

      <Prose>
        <p className="text-prose">
          What we generalised wasn’t the playfulness. It was the structure.
          Rewards had already established that a screen works better when it
          opens with an overview of where you stand, so every main module view
          now uses a taller coloured header with a floating summary card
          sitting across it. Home summarises the week’s hours, shifts remaining
          and open shifts. Schedule summarises total hours, total shifts and
          projected pay. Requests summarises what’s pending, approved and
          rejected. Drill-downs get a streamlined header with the same colour
          treatment, so the theme holds without a summary being forced onto
          content that doesn’t have one.
        </p>
      </Prose>

      {/* The alt in the spec said $770; the exports show $810 in all four
          variants, and the alt follows the image. */}
      <Figure
        variant="raster"
        width="wide"
        aspect={FIGURE_ASPECT}
        caption="Schedule, before and after. Total hours, shifts and projected pay come before any individual shift."
        {...sources(
          "08-schedule-before-after",
          "Two phone screens labelled before and after. The before screen shows a plain list of shifts by day. The after screen adds a blue header and a summary card of 45 hours, 5 shifts and $810 projected pay above the same list.",
        )}
      />

      <Prose>
        <p className="text-prose">
          That distinction is the whole framework. One header for views that
          should orient you, another for views that should get out of the way,
          and a shared visual treatment across both.
        </p>
        <p className="text-prose">
          The restraint mattered as much as the reach. Illustrated icons and
          encouraging copy stayed within the motivating modules, because a
          shift trade request isn’t an achievement and treating it like one
          would be worse than leaving it plain. What did carry across was a
          small set of accent colours, enough to make the app feel like one
          product without pretending every screen is a celebration. More, the
          overflow of everything that doesn’t earn a place in the bottom
          navigation, was the hardest test of that. There’s nothing to
          celebrate on it, but it still gets the header, the profile summary
          and the accent colours, and it still reads as the same app.
        </p>
      </Prose>

      <Heading>Where it stands</Heading>

      <Prose>
        <p className="text-prose">
          Rewards is live with a growing number of operators. Learning and the
          new app theme are both in development, with the theme due for release
          in Q4 2026.
        </p>
        <p className="text-prose">
          Operators have always treated app adoption as a rollout problem,
          solved with mandates and manager nagging. The beta suggested it’s a
          design problem instead. Build something people open by choice, point
          it at the behaviours the business needs, and adoption is earned
          rather than enforced. Rewards showed that once. The theme is how we
          make it true everywhere else in the app.
        </p>
      </Prose>
    </CaseStudyLayout>
  );
}
