import PageMeta from '../components/PageMeta'
import { Button, PageHeader } from '../components/ui'

export default function NotFound() {
  return (
    <>
      <PageMeta title="Page not found" />
      <PageHeader
        className="flex min-h-[70svh] flex-col justify-center"
        eyebrow="Error 404"
        title="This room is empty."
        lede="The page you asked for doesn't exist — or it has been folded into a newer chapter."
      >
        <div className="mt-10 flex flex-wrap gap-3">
          <Button to="/">Back to the beginning</Button>
          <Button to="/shop" variant="line">
            Browse the catalogue
          </Button>
        </div>
      </PageHeader>
    </>
  )
}
