import { Icons } from "@/components/ui/icons"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react"
import { Link } from "wouter"

export function StackedCircularFooter() {
  return (
    <footer className="bg-background dark:bg-[#171717] py-12">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center">
          <div className="mb-8 rounded-full bg-primary/10 p-4">
            <img
              src="/images/Elastos New Logo_Kit-03.png"
              alt="Elastos Logo"
              className="w-12 h-12 object-contain"
            />
          </div>
          <nav className="mb-8 flex flex-wrap justify-center gap-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 w-full max-w-4xl">
              <div>
                <h3 className="font-semibold mb-4">ELA</h3>
                <div className="flex flex-col gap-2">
                  <Link href="/stats" className="hover:text-primary">Stats</Link>
                  <Link href="/security" className="hover:text-primary">Security</Link>
                  {/* Value Calc removed */}
                  <Link href="/supply" className="hover:text-primary">Supply</Link>
                  <Link href="/buy-ela" className="hover:text-primary">Buy ELA</Link>
                </div>
              </div>
              <div>
                <h3 className="font-semibold mb-4">Products</h3>
                <div className="flex flex-col gap-2">
                  <a href="https://bel2.org" target="_blank" rel="noopener noreferrer" className="hover:text-primary">BeL2</a>
                  <a href="https://labs.ela.city" target="_blank" rel="noopener noreferrer" className="hover:text-primary">Elacity</a>
                  <a href="https://cyberrepublic.org" target="_blank" rel="noopener noreferrer" className="hover:text-primary">Cyber Republic</a>
                  <a href="https://d.web3essentials.io/" target="_blank" rel="noopener noreferrer" className="hover:text-primary">Essentials</a>
                </div>
              </div>
              <div>
                <h3 className="font-semibold mb-4">Support</h3>
                <div className="flex flex-col gap-2">
                  <Link href="/support/help" className="hover:text-primary">Help Center</Link>
                  <Link href="/support/faq" className="hover:text-primary">FAQ</Link>
                  <Link href="/support/contact" className="hover:text-primary">Contact</Link>
                </div>
              </div>
              <div>
                <h3 className="font-semibold mb-4">Company</h3>
                <div className="flex flex-col gap-2">
                  <Link href="/about" className="hover:text-primary">About</Link>
                  <Link href="/blog" className="hover:text-primary">Blog</Link>
                  <Link href="/careers" className="hover:text-primary">Careers</Link>
                </div>
              </div>
            </div>
          </nav>
          <div className="mb-8 flex space-x-4">
            <Button variant="outline" size="icon" className="rounded-full">
              <Twitter className="h-4 w-4" />
              <span className="sr-only">Twitter</span>
            </Button>
            <Button variant="outline" size="icon" className="rounded-full">
              <Linkedin className="h-4 w-4" />
              <span className="sr-only">LinkedIn</span>
            </Button>
            <Button variant="outline" size="icon" className="rounded-full">
              <Facebook className="h-4 w-4" />
              <span className="sr-only">Facebook</span>
            </Button>
            <Button variant="outline" size="icon" className="rounded-full">
              <Instagram className="h-4 w-4" />
              <span className="sr-only">Instagram</span>
            </Button>
          </div>
          <div className="mb-8 w-full max-w-md">
            <form className="flex space-x-2">
              <div className="flex-grow">
                <Label htmlFor="email" className="sr-only">Email</Label>
                <Input id="email" placeholder="Enter your email" type="email" className="rounded-full" />
              </div>
              <Button type="submit" className="rounded-full">Subscribe</Button>
            </form>
          </div>
          <div className="text-center">
            <p className="text-sm text-muted-foreground">
              © 2025 Elastos. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}