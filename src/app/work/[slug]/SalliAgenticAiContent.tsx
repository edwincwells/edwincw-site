import {
  ArtDirected,
  CaseStudyLayout,
  Figure,
  Heading,
  Prose,
} from "@/components/CaseStudyLayout";
import { PullQuote } from "@/components/PullQuote";
import { AgentGrouping } from "@/components/diagrams/AgentGrouping";
import { InitiationMatrix } from "@/components/diagrams/InitiationMatrix";

/* Prose is a Server Component — the client boundary sits on CaseStudyLayout,
   Figure and PullQuote, so the essay itself never enters the client bundle.
   AboutContent.tsx carries "use client" only because it calls useScrollReveal
   directly; the naming convention is what carries over, not the directive.

   All six visuals are built: two diagrams and four screenshot pairs. The hero
   carries no caption, because CaseStudyLayout renders none for that slot.

   Every screenshot is art-directed — a different crop below md, not the same
   picture scaled — so each passes both an `image` and a `mobileImage`.
   `aspect` is load-bearing on all of them: two sources cannot both be
   described by one pair of intrinsic dimensions, so the CSS ratio is what
   reserves the box at each breakpoint.

   The hero reaches ArtDirected directly rather than through Figure, which
   would add a figcaption and constrain it to the reading column. Its wrapper
   in CaseStudyLayout is aria-hidden, so the alt below is not announced today;
   it is written properly regardless, so it is correct if that ever changes. */

/* One <picture> resolves to one <img>, so both crops share this. It leads with
   what they both show and names the desktop-only chrome second, since the
   mobile crop drops the header and sidebar and keeps the agenda. "Lunch labor"
   is quoted as the product renders it — US spelling, like Labor snapshot in
   the grouping diagram, not a lapse into American English. */
const HERO_ALT =
  "Salli Cowork open at the start of a session, showing a prioritised agenda " +
  "headed “Here’s your to-dos, Adam — I found 8 tasks. I’ve listed them in " +
  "priority order”, led by a card reading “Lunch labor is tracking ~14% over " +
  "forecast” with a $320 over plan flag and Salli’s reasoning steps beneath " +
  "it. The wider view also shows the Chat and Cowork mode toggle and a list " +
  "of recent Cowork sessions.";

export function SalliAgenticAiContent() {
  return (
    <CaseStudyLayout
      eyebrow="Product Case Study"
      title="Capability is not the product"
      standfirst="Designing agentic AI around the moment a frontline manager decides what to do next"
      heroVisual={
        <ArtDirected
          image={{
            src: "/work/salli/salli-hero-web.webp",
            alt: HERO_ALT,
            width: 2368,
            height: 1015,
          }}
          mobileImage={{
            src: "/work/salli/salli-hero-mobile.webp",
            width: 984,
            height: 554,
          }}
          /* Full Container width, wider than the Measured column any body
             figure uses — so 100vw rather than their 920px. */
          sizes="100vw"
          aspect="aspect-[16/9] md:aspect-[21/9]"
        />
      }
    >
      <Prose>
        <p className="text-prose">
          The demos went well. Beta clients watched Salli read a week of
          forecast demand against a published schedule, find the shifts that
          were overstaffed and say what to do about them, and they were
          impressed. Then they logged in and mostly didn’t use it. In a given
          week, around one in six managers at accounts with Salli enabled opened
          it. Over three months the cohort tripled and that number didn’t move.
        </p>
        <p className="text-prose">
          What they told us was that Salli wasn’t proactive enough. That was an
          accurate description of the symptom. It took us two attempts to work
          out what it was pointing at, and both attempts failed in ways that
          were more useful than the first version working would have been.
        </p>
        <p className="text-prose">
          The question a restaurant manager actually has, twenty minutes before
          service, is what do I need to focus on right now. We had built
          something that could answer it, and no reliable way for it to be
          asked.
        </p>
      </Prose>

      <Heading>What we built</Heading>

      <Prose>
        <p className="text-prose">
          Harri is an HCM platform used by around two million frontline workers
          a month, and the people Salli is for are the managers running those
          sites: balancing labour cost against forecast demand, staying inside
          multi-jurisdictional compliance rules, and doing it during live
          service. Workforce tools have historically handed them data and left
          the interpretation to them, which turns a manager into a part-time
          analyst at exactly the moment they should be running the floor.
        </p>
        <p className="text-prose">
          We could have put a chatbot over the platform’s data and shipped it
          quickly. The bet we made instead was that Salli should do the analysis
          rather than describe where to find it, and carry out the resulting
          platform tasks with the manager’s confirmation. Underneath the
          companion we built a library of bounded agents with specific remits:
          sales and labour analysis, compliance oversight, timekeeping
          intelligence, request management, weather impact. Salli was the
          companion. The agents were focuses it could call on, and a manager
          could switch focus inside a single conversation without losing the
          thread.
        </p>
      </Prose>

      <Figure
        variant="raster"
        width="wide"
        aspect="aspect-[4/3] md:aspect-[16/9]"
        caption="The agent library and in-chat focus switching, shown in the current build."
        image={{
          src: "/work/salli/salli-agents-web.webp",
          alt: "Salli’s focus list open over a schedule, listing Guided learning, Sales snapshot, Labor snapshot, Team communication, Schedule warnings, Compliance oversight and Timekeeping intelligence, opened from an Agents button beside the chat composer.",
          width: 1648,
          height: 928,
        }}
        mobileImage={{
          src: "/work/salli/salli-agents-mobile.webp",
          width: 984,
          height: 738,
        }}
      />

      <Heading>The argument I won</Heading>

      <Prose>
        <p className="text-prose">
          As the library grew, a commercial argument arrived with it.
          Competitors were going to market claiming hundreds of AI agents, and
          there was a reasonable case for exposing ours the same way, since a
          visible count is easy to sell and easy to compare.
        </p>
        <p className="text-prose">
          I argued that the count was the wrong axis. The number of agentic
          workflows running behind the scenes and the number of choices a
          manager faces at the point of use are different problems, and treating
          them as one problem means selling a number to a buyer at the cost of
          the person on shift. We kept the curated surface.
        </p>
        <p className="text-prose">
          I’d make the same argument again. But it made no difference to
          adoption.
        </p>
      </Prose>

      <Figure
        variant="svg"
        width="wide"
        caption="The same capability either way. The argument was about how much of its structure a manager has to hold."
      >
        <AgentGrouping />
      </Figure>

      <Heading>Why it wasn’t enough</Heading>

      <Prose>
        <p className="text-prose">
          Surface complexity wasn’t what was wrong. Initiation was.
        </p>
      </Prose>

      <PullQuote>
        We had set out to remove the burden of interpretation, and replaced it
        with the burden of knowing what to ask.
      </PullQuote>

      <Prose>
        <p className="text-prose">
          To get value from Salli you had to open it, and to open it usefully
          you had to already suspect that something needed your attention. The
          library’s prompts helped a little with what to ask, but the manager
          was still guessing which focus was holding something timely, and a
          manager mid-shift doesn’t have the spare attention to go fishing. Of
          the managers who did open Salli in a given week, about three quarters
          opened it on a single day. Almost none used it on three days or more,
          and nobody used it daily. It never became part of anyone’s routine.
        </p>
        <p className="text-prose">
          We had set out to remove the burden of interpretation, and replaced it
          with the burden of knowing what to ask. That’s the chatbot failure in
          better clothes, which is the thing we had explicitly set out not to
          build.
        </p>
      </Prose>

      <Heading>Making Salli speak first</Heading>

      <Prose>
        <p className="text-prose">
          So we gave Salli a voice outside the conversation. We designed an
          alerts highlights popover in the platform header on web, with push and
          in-app notifications on mobile. A drop in forecast demand that meant
          the schedule needed adjusting, a new time-off request that conflicted
          with the published rota, a team member’s birthday coming up. Get the
          manager’s attention, then draw them into Salli to act on it.
        </p>
      </Prose>

      <PullQuote>
        The alerts were right about the content and wrong about the moment.
      </PullQuote>

      <Figure
        variant="raster"
        width="wide"
        aspect="aspect-[3/4] md:aspect-[16/10]"
        caption="Right about the content, wrong about the moment."
        image={{
          src: "/work/salli/salli-alerts-web.webp",
          alt: "Salli’s alerts on both surfaces. On web, an Alert highlights popover in the platform header stacking business performance, team moments and team requests cards over the schedule. On mobile, a push notification reading “Salli alert — It’s Olivia Brown’s birthday today!” above a sales and labour dashboard.",
          width: 1648,
          height: 1030,
        }}
        mobileImage={{
          src: "/work/salli/salli-alerts-mobile.webp",
          width: 984,
          height: 1312,
        }}
      />

      <Prose>
        <p className="text-prose">
          Three things went wrong, and we found them by watching behaviour and
          going back to several beta clients.
        </p>
        <p className="text-prose">
          The mobile notifications arrived while managers were doing something
          else, usually outside Harri, so they were dismissed in the moment and
          not returned to later. Salli’s usage on mobile never got above
          a few per cent of the managers using the Harri mobile app, against
          roughly a fifth on web, so the surface we were interrupting people on
          was the one they were least likely to act on. The web popover opened
          automatically whenever a new alert landed, which our PMs had pushed
          for and I hadn’t managed to argue them out of, and it was intrusive
          enough that people resented it. And nothing was prioritised, so
          anything that could be alerted was alerted, and the alerts became
          noise.
        </p>
        <p className="text-prose">
          The alerts were right about the content and wrong about the moment.
          We’ve kept them, tuned down to what’s genuinely urgent, with auto-open
          moved behind a user preference. That’s a fix rather than a reversal,
          because the mechanism was sound and it was the timing and the volume
          that weren’t.
        </p>
      </Prose>

      <Heading>The same failure twice</Heading>

      <Prose>
        <p className="text-prose">
          The library and the alerts failed for the same reason, and it took us
          longer than it should have to see it.
        </p>
      </Prose>

      <PullQuote>
        The design problem in agentic software isn’t what the system can do.
        It’s who starts, and when.
      </PullQuote>

      <Prose>
        <p className="text-prose">
          The agent library made the manager decide both when to engage and what
          to ask about. The alerts took both of those decisions away and made
          them on the system’s schedule, in the middle of whatever the manager
          was already doing. We had built the two extremes and neither of them
          was where the work happens.
        </p>
        <p className="text-prose">
          A manager arriving at the start of a shift will accept an agenda,
          because working out what today looks like is what they are there to
          do. The same manager forty minutes into service will not accept an
          interruption, however good the analysis behind it is. The session
          should be initiated by the person. The content should be initiated by
          the system. The design problem in agentic software isn’t what the
          system can do. It’s who starts, and when. We had never designed that,
          because we’d been treating proactivity as a property of the product
          rather than a property of a moment.
        </p>
      </Prose>

      <Heading>Chat and Cowork</Heading>

      <Prose>
        <p className="text-prose">
          Salli Cowork is the mode we’re building from that. A manager opens it
          when they log in, at the start of the day or the start of a shift, and
          it gives them a prioritised set of things that need their attention
          and what to do about each one, drawn from the same agents that were
          already there.
        </p>
      </Prose>

      <Figure
        variant="raster"
        width="wide"
        aspect="aspect-[3/4] md:aspect-[16/10]"
        caption="Salli Cowork, in design. The manager opens the session, and it opens with an agenda."
        image={{
          src: "/work/salli/salli-cowork-web.webp",
          alt: "Salli Cowork open beside the schedule, headed “Here’s your to-dos — I found 8 tasks. I’ve listed them in priority order”, with the first item flagging three time-off requests that need a decision, one colliding with Saturday cover and $210 at risk.",
          width: 1648,
          height: 1030,
        }}
        mobileImage={{
          src: "/work/salli/salli-cowork-mobile.webp",
          width: 984,
          height: 1312,
        }}
      />

      <Prose>
        <p className="text-prose">
          The idea came from one of our PMs. We recognised it as the answer to
          the question we’d just gone back to first principles to ask, rather
          than a third feature to sit alongside chat and alerts. My team shaped
          it into two modes of the same companion. Chat is exploratory and
          user-led, for when a manager knows what they want to interrogate.
          Cowork is guided and system-led, for when they don’t yet know what
          today holds.
        </p>
      </Prose>

      <Figure
        variant="svg"
        width="wide"
        caption="Cowork isn’t a midpoint between the two failures. It’s the combination neither of them had."
      >
        <InitiationMatrix />
      </Figure>

      <Prose>
        <p className="text-prose">
          It’s in final design now and development starts shortly. The open work
          is the flows, the trigger points and the onboarding, and I expect
          onboarding to be the hard part, because a mode that opens with an
          agenda has to be right early or it teaches people to skip it.
        </p>
      </Prose>

      <Heading>What this was actually about</Heading>

      <Prose>
        <p className="text-prose">
          Every version of Salli has been more capable than the one before it,
          and capability has never been the constraint. Twice we responded to
          weak adoption by adding more of it, and twice we made the experience
          worse: first by giving managers more to choose from, then by giving
          them more to ignore.
        </p>
        <p className="text-prose">
          Cowork might not work either. But it’s the first version aimed at the
          question the manager actually has, rather than at a demonstration of
          what the system knows.
        </p>
      </Prose>
    </CaseStudyLayout>
  );
}
