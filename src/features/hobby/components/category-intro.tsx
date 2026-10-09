'use client';

type CategoryIntroProps = {
  title: string;
  description: string;
};

export function CategoryIntro({ title, description }: CategoryIntroProps) {
  return (
    <section className="py-10 lg:py-12">
      <h1 className="text-3xl font-bold leading-tight tracking-tight lg:text-4xl">
        {title}
      </h1>
      <p className="mt-3 max-w-[640px] text-base leading-7 text-muted">
        {description}
      </p>
    </section>
  );
}
