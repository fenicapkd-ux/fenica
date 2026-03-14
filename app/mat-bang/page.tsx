import ProjectOverview from "@/components/organism/project-overview";
import { fenicaOverview } from "@/mock-data/overview.data";

export default function AboutPage() {
  return (
    <main>
       <ProjectOverview {...fenicaOverview} />
    </main>
  )
}
