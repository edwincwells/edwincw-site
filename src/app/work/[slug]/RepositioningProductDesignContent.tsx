import {
  CaseStudyLayout,
  Figure,
  Heading,
  Placeholder,
  Prose,
} from "@/components/CaseStudyLayout";
import { PullQuote } from "@/components/PullQuote";

/* Prose is a Server Component — the client boundary sits on CaseStudyLayout,
   Figure and PullQuote, so the essay itself never enters the client bundle.
   AboutContent.tsx carries "use client" only because it calls useScrollReveal
   directly; the naming convention is what carries over, not the directive. */

export function RepositioningProductDesignContent() {
  return (
    <CaseStudyLayout
      eyebrow="Leadership Case Study"
      title="The bottleneck was us"
      standfirst="Repositioning Product Design for agentic engineering"
      heroVisual={
        <Placeholder
          label="[ Hero visual — prompt 11 ]"
          aspect="aspect-[16/9] md:aspect-[21/9]"
        />
      }
    >
      <Prose>
        <p className="text-prose">
          Our engineering team had been planning a move to agentic development
          for months. It had been treated as an engineering delivery decision
          rather than a design one, so nobody thought to involve us, and I found
          out how far along they were when the first product scoped for it
          turned up ready to build.
        </p>
        <p className="text-prose">
          The LMS was a new product area with new surfaces, new navigation and
          no precedent to follow, and the agentic build meant fast delivery with
          less need for pixel-perfect design before development started. PMs
          began sharing AI-generated wireframes directly with the dev team. They
          were following a process that had no design step in it, for a build
          that no longer needed finished screens to make progress.
        </p>
        <p className="text-prose">
          I went to our CPO and VP of Engineering and made the case for
          experience architecture as a stage in how we deliver, rather than
          asking to be put back into a process that had already moved past us.
          The argument was about cost: structural decisions made without design
          expertise are cheap to take and expensive to unpick. I brought a
          proposal for how it would work rather than a complaint about being
          left out, which I think is why it landed.
        </p>
        <p className="text-prose">
          We caught IA decisions and design system discrepancies before they
          were built. The product is still in development, but the fixes
          weren’t really the point. The point was that going around us had been
          a reasonable thing for the organisation to do, and that if I argued my
          way back into the old position I’d be arguing to be a bottleneck
          again.
        </p>
        <p className="text-prose">
          So I didn’t argue it. Within a few weeks I’d rewritten how Product
          Design engages with delivery, and repositioned the team around it.
        </p>
      </Prose>

      <Heading>The model was already broken</Heading>

      <PullQuote>
        We were too busy servicing the simple to deliver the exceptional.
      </PullQuote>

      <Prose>
        <p className="text-prose">
          PMs used to request design work from us, so everything queued behind
          the same six designers supporting a platform used by two million
          people a month. Every settings change, every new report added and
          every bounded update came to us and waited its turn.
        </p>
      </Prose>

      <Figure
        variant="svg"
        width="wide"
        aspect="aspect-[4/3] md:aspect-[16/9]"
        placeholder="[ Diagram 1: before — prompt 11 ]"
        caption="Before. Every request routed through Product Design as the sole downstream step, regardless of complexity."
      />

      <Prose>
        <p className="text-prose">
          The cost wasn’t only throughput. It was that we weren’t doing the work
          only we could do, the micro-interactions and richer animation and
          onboarding states that make a new product feel considered rather than
          assembled. We were too busy servicing the simple to deliver the
          exceptional.
        </p>
        <p className="text-prose">
          Agentic development didn’t create that problem, it made it impossible
          to ignore, because the simple work could now feasibly ship without us
          while the structural work was getting locked in before we ever saw it.
          When building gets cheaper, decisions about navigation and hierarchy
          get baked in sooner and cost more to reverse, and you can’t QA your
          way back to coherent IA.
        </p>
        <p className="text-prose">
          So the question was not how to get design back into the process. It
          was: which part of the process should design actually own?
        </p>
      </Prose>

      <Heading>The trade</Heading>

      <PullQuote>
        We gave up execution on the work where our design system already knew
        the answer, in order to buy the upstream position on the work where it
        didn’t.
      </PullQuote>

      <Prose>
        <p className="text-prose">
          So I gave work away. Product Design would stop being the team you
          request design from and become the team that decides where design is
          needed, with bounded work that sits inside established patterns moving
          to PMs, who design it themselves in Claude Design working from our
          design system, with every output reviewed by us before build.
        </p>
        <p className="text-prose">
          In exchange, we’re involved at the start of every structurally
          significant project, before anyone specs and before anyone builds.
        </p>
        <p className="text-prose">
          It’s a trade rather than a land grab. We gave up execution on the work
          where our design system already knew the answer, in order to buy the
          upstream position on the work where it didn’t.
        </p>
        <p className="text-prose">
          Renaming the team from UI/UX to Product Design followed from that,
          along with the job titles and a career framework rewritten underneath.
          A rename on its own would be decoration, but attached to a change in
          what the team is accountable for it was the cheapest way to tell the
          organisation that something had genuinely changed.
        </p>
      </Prose>

      <Figure
        variant="svg"
        width="wide"
        aspect="aspect-[4/3] md:aspect-[16/9]"
        placeholder="[ Diagram 2: after — prompt 11 ]"
        caption="After. Two paths out of scope review — Tier 1 with Product Design at kickoff, Tier 2 PM-led with design review before build."
      />

      <Heading>How it works</Heading>

      <Prose>
        <p className="text-prose">
          I split delivery work into two tiers. The tier is assigned at scope
          review.
        </p>
        <p className="text-prose">
          Tier 1 is experience architecture and we’re involved at kickoff,
          covering anything that introduces a new surface, changes navigation,
          restructures a journey, crosses product areas, touches a hero feature
          or needs a pattern that doesn’t exist yet. The LMS was Tier 1 on every
          one of those tests, which is exactly why it shouldn’t have reached
          development without us.
        </p>
      </Prose>

      <PullQuote>
        I’d built a system whose entire purpose was to stop us being the
        bottleneck and then tuned it so conservatively that it recreated the
        bottleneck on day one.
      </PullQuote>

      <Prose>
        <p className="text-prose">
          Any one of those signals is enough to make something Tier 1. Tier 2 is
          PM-led, and every one of these has to be true instead: an existing
          surface, unchanged navigation, a single PM domain, and every component
          already in the design system.
        </p>
      </Prose>

      <Figure
        variant="svg"
        width="wide"
        aspect="aspect-[3/4] md:aspect-[16/10]"
        placeholder="[ Diagram 3: tier decision flow — prompt 11 ]"
        caption="The tier decision. Any yes routes to Tier 1; all four no routes to Tier 2."
      />

      <Prose>
        <p className="text-prose">
          The part that mattered most was who assigns the tier. The guidance I
          wrote puts that with product leads at scope review, and that’s where
          it needs to end up, because if Product Design decides how much Product
          Design is needed then nothing structural has changed and we’ve just
          formalised the request queue with better paperwork. We’re still doing
          the tiering ourselves for now, which is deliberate. We’ll cautiously
          hand it over when we’re done trialling.
        </p>
      </Prose>

      <Heading>What I got wrong</Heading>

      <Prose>
        <p className="text-prose">
          I wrote “under-tiering is the failure mode to protect against” into
          the guidance and told people to default to Tier 1 whenever they were
          unsure, and almost everything came back Tier 1. I’d built a system
          whose entire purpose was to stop us being the bottleneck and then
          tuned it so conservatively that it recreated the bottleneck on day
          one.
        </p>
        <p className="text-prose">
          The instinct to protect quality is the same instinct that keeps design
          teams servicing work they should have let go of years ago, and mine
          turns out to be as strong as anyone’s. We’re relaxing the criteria
          gradually and evaluating as we go.
        </p>
      </Prose>

      <Heading>The harder conversations were internal</Heading>

      <Prose>
        <p className="text-prose">
          I expected pushback from PMs taking on extra work, but it came from my
          own designers instead. We’d been talking about AI’s effect on our
          workflows for months, but that didn’t stop the more junior members of
          the team hearing “PMs will design some things” as “design decisions
          are going to non-designers, and eventually you won’t be needed”.
          That’s a reasonable reading if you’re early in your career and your
          value still feels tied to producing the artefact.
        </p>
        <p className="text-prose">
          It took several uncomfortable conversations, and what landed was the
          move from designing at the feature level to designing at the system
          level: the system is what carries our judgment into work we never
          personally touch, and stewarding it is a bigger job than executing
          screens.
        </p>
        <p className="text-prose">
          They’re engaged with that framing now, and cautiously optimistic,
          though not free of the general anxiety about AI running through the
          industry at the moment. I’d be suspicious of a team that was.
        </p>
        <p className="text-prose">
          I don’t think that argument is finished, though. It gets settled by
          what actually happens to their work over the next two quarters, not by
          anything I said in a team meeting.
        </p>
      </Prose>

      <Heading>Making sure quality holds</Heading>

      <Prose>
        <p className="text-prose">
          The trade only works if quality survives, so I built an AI design
          review agent that runs across all design output, ours as well as
          PM-led, checking against the design system, content guidelines, UX
          practice and WCAG 2.2 AA. It runs in Claude Cowork with the Figma MCP
          and integrations into Jira and Confluence, so it reads the designs,
          the tickets and the documented standards together rather than
          assessing a screen in isolation. It’s in its second week and has
          reviewed 22 tasks.
        </p>
      </Prose>

      <Figure
        variant="raster"
        aspect="aspect-[16/10]"
        placeholder="[ Image 1: review agent screenshot — prompt 11 ]"
        caption="The review agent commenting directly on a Figma frame."
      />

      <Prose>
        <p className="text-prose">
          It’s surfaced content and pattern inconsistencies we’d previously have
          missed, but there’s been a more useful behaviour: it cross-references,
          so content gets reviewed in the context of the wider platform rather
          than one ticket at a time, which a human reviewer looking at a single
          ticket can’t easily do. For now it produces a report for a person to
          act on, and I’m not in a hurry to make it a gate.
        </p>
      </Prose>

      <Heading>What’s shipped so far</Heading>

      <Prose>
        <p className="text-prose">
          PM-led design is running as an open-ended trial on a bounded set of
          work: new reports and settings changes, around 12 tasks in so far. The
          bar is no bottleneck in the design phase, and delivery that adheres to
          the design system. If PMs tell me they’ve absorbed too much work, or
          if a structurally significant project reaches build without us, that’s
          a failure of the tiering and I’ll pull it back.
        </p>
        <p className="text-prose">
          The time it gives back is going into the design system and into the
          craft of the product itself, the finesse we’d been skipping. We’re
          also starting to originate product improvements rather than only
          responding to requests for them, and the first of those is a
          modernised, streamlined approach to reviewing candidates in our talent
          acquisition product.
        </p>
        <p className="text-prose">
          The career framework is approved and communicated, and landed well
          with the team. Additional Jira automation and the roll-out to the full
          PM org are deliberately gated behind the trial rather than shipped
          alongside it.
        </p>
        <p className="text-prose">
          This is a bet rather than a finished transformation, but I’m confident
          about the reasoning behind it. When development speeds up, building
          the wrong structure can send you pretty far down the wrong path
          quickly, and a design team that responds to that by trying to keep
          hold of every screen will get routed around by an organisation that’s
          moving faster than it is.
        </p>
      </Prose>
    </CaseStudyLayout>
  );
}
