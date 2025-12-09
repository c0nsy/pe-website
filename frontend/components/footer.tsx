export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground py-12 border-t border-primary-foreground/10">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <img
                src="/platinum-logo.jpg"
                alt="Platinum Enterprise Group Logo"
                className="h-12 w-auto object-contain"
              />
              <div className="text-2xl font-serif font-bold">Platinum Enterprise Group</div>
            </div>
            <p className="text-primary-foreground/70 text-sm">A Step Above The Rest</p>
            <p className="text-primary-foreground/70 text-sm max-w-md">
              Your one-stop solution for property maintenance, landscaping, and contracting services across Southwestern
              Ontario.
            </p>
          </div>

          <div className="space-y-4 md:text-right">
            <div className="space-y-2">
              <p className="text-sm font-medium">Contact</p>
              <div className="text-sm text-primary-foreground/70 space-y-1">
                <p>Primary: (548) 558-1970</p>
                <p>After Hours: 1-866-278-2610</p>
                <p>office@platinumeg.ca</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-primary-foreground/10 text-center text-sm text-primary-foreground/70">
          <p>© {new Date().getFullYear()} Platinum Enterprise Group. All rights reserved.</p>
          <p className="mt-2">Serving Kitchener, Waterloo, Cambridge, Guelph, and greater Southwestern Ontario</p>
        </div>
      </div>
    </footer>
  )
}
