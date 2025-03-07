import { Container } from "@/components/container";
import { Button } from "@/components/ui/button";

export default function AboutMe() {
  return (
    <Container className="w-full h-full px-4 md:px-6 flex flex-col justify-center items-center gap-5">
      <div className="flex flex-col justify-center items-center gap-y-4">
        <h1 className="text-7xl text-muted-foreground">
          Hi, I'm <span className="font-semibold text-primary">Yudho Alfantyo,</span>
        </h1>
        <h1 className="text-7xl text-muted-foreground">
          Front-end <span className="font-semibold text-primary">Developer.</span>
        </h1>
      </div>
      <div className="mt-10">
        <Button variant="outline" className="rounded-full" size="lg">
          Let's Connect
        </Button>
      </div>
    </Container>
  );
}
