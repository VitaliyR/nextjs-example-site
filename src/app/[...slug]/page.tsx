type RouteProps = {
  params: Promise<{
    slug: string[];
  }>;
};

export function generateStaticParams() {
  return [{ slug: ['my-static-page'] }];
}

export default async function DynamicPage(props: RouteProps) {
  const params = await props.params;
  return (
    <div>
      Page: {params.slug.join('/')}
    </div>
  );
}
