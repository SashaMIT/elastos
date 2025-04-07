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
          <div className="flex space-x-3 mb-8">
            <a href="https://x.com/ElastosInfo" target="_blank" rel="noopener noreferrer">
              <Button variant="outline" size="icon" className="rounded-full">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z"/>
                </svg>
                <span className="sr-only">X (Twitter)</span>
              </Button>
            </a>
            <a href="https://t.me/elastosgroup" target="_blank" rel="noopener noreferrer">
              <Button variant="outline" size="icon" className="rounded-full">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 496 512" fill="currentColor">
                  <path d="M248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zm121.8 169.9l-40.7 191.8c-3 13.6-11.1 16.9-22.4 10.5l-62-45.7-29.9 28.8c-3.3 3.3-6.1 6.1-12.5 6.1l4.4-63.1 114.9-103.8c5-4.4-1.1-6.9-7.7-2.5l-142 89.4-61.2-19.1c-13.3-4.2-13.6-13.3 2.8-19.7l239.1-92.2c11.1-4 20.8 2.7 17.2 19.5z"></path>
                </svg>
                <span className="sr-only">Telegram</span>
              </Button>
            </a>
            <a href="https://discord.com/invite/elastos" target="_blank" rel="noopener noreferrer">
              <Button variant="outline" size="icon" className="rounded-full">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 127.14 96.36" fill="currentColor">
                  <path d="M107.7,8.07A105.15,105.15,0,0,0,81.47,0a72.06,72.06,0,0,0-3.36,6.83A97.68,97.68,0,0,0,49,6.83,72.37,72.37,0,0,0,45.64,0,105.89,105.89,0,0,0,19.39,8.09C2.79,32.65-1.71,56.6.54,80.21h0A105.73,105.73,0,0,0,32.71,96.36,77.7,77.7,0,0,0,39.6,85.25a68.42,68.42,0,0,1-10.85-5.18c.91-.66,1.8-1.34,2.66-2a75.57,75.57,0,0,0,64.32,0c.87.71,1.76,1.39,2.66,2a68.68,68.68,0,0,1-10.87,5.19,77,77,0,0,0,6.89,11.1A105.25,105.25,0,0,0,126.6,80.22h0C129.24,52.84,122.09,29.11,107.7,8.07ZM42.45,65.69C36.18,65.69,31,60,31,53s5-12.74,11.43-12.74S54,46,53.89,53,48.84,65.69,42.45,65.69Zm42.24,0C78.41,65.69,73.25,60,73.25,53s5-12.74,11.44-12.74S96.23,46,96.12,53,91.08,65.69,84.69,65.69Z"/>
                </svg>
                <span className="sr-only">Discord</span>
              </Button>
            </a>
            <a href="https://www.reddit.com/r/Elastos/" target="_blank" rel="noopener noreferrer">
              <Button variant="outline" size="icon" className="rounded-full">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0zm5.01 4.744c.688 0 1.25.561 1.25 1.249a1.25 1.25 0 0 1-2.498.056l-2.597-.547-.8 3.747c1.824.07 3.48.632 4.674 1.488.308-.309.73-.491 1.207-.491.968 0 1.754.786 1.754 1.754 0 .716-.435 1.333-1.01 1.614a3.111 3.111 0 0 1 .042.52c0 2.694-3.13 4.87-7.004 4.87-3.874 0-7.004-2.176-7.004-4.87 0-.183.015-.366.043-.534A1.748 1.748 0 0 1 4.028 12c0-.968.786-1.754 1.754-1.754.463 0 .898.196 1.207.49 1.207-.883 2.878-1.43 4.744-1.487l.885-4.182a.342.342 0 0 1 .14-.197.35.35 0 0 1 .238-.042l2.906.617a1.214 1.214 0 0 1 1.108-.701zM9.25 12C8.561 12 8 12.562 8 13.25c0 .687.561 1.248 1.25 1.248.687 0 1.248-.561 1.248-1.249 0-.688-.561-1.249-1.249-1.249zm5.5 0c-.687 0-1.248.561-1.248 1.25 0 .687.561 1.248 1.249 1.248.688 0 1.249-.561 1.249-1.249 0-.687-.562-1.249-1.25-1.249zm-5.466 3.99a.327.327 0 0 0-.231.094.33.33 0 0 0 0 .463c.842.842 2.484.913 2.961.913.477 0 2.105-.056 2.961-.913a.361.361 0 0 0 .029-.463.33.33 0 0 0-.464 0c-.547.533-1.684.73-2.512.73-.828 0-1.979-.196-2.512-.73a.326.326 0 0 0-.232-.095z"/>
                </svg>
                <span className="sr-only">Reddit</span>
              </Button>
            </a>
            <a href="https://www.youtube.com/channel/UCy5AjgpQIQq3bv8oy_L5WTQ" target="_blank" rel="noopener noreferrer">
              <Button variant="outline" size="icon" className="rounded-full">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
                <span className="sr-only">YouTube</span>
              </Button>
            </a>
            <a href="https://github.com/elastos" target="_blank" rel="noopener noreferrer">
              <Button variant="outline" size="icon" className="rounded-full">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
                </svg>
                <span className="sr-only">GitHub</span>
              </Button>
            </a>
            <a href="https://www.facebook.com/elastos" target="_blank" rel="noopener noreferrer">
              <Button variant="outline" size="icon" className="rounded-full">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M22.675 0H1.325C.593 0 0 .593 0 1.325v21.351C0 23.407.593 24 1.325 24h10.458v-9h-3.335v-4.76h3.335v-2.51c0-3.407 1.767-5.323 6.084-5.323 4.256 0 6.06 1.916 6.06 5.323v2.51h-3.335v4.76h3.335v9h-11.026C.593 24 0 23.407 0 21.351V1.325C0 .593.593 0 1.325 0h21.35z"/>
                </svg>
                <span className="sr-only">Facebook</span>
              </Button>
            </a>
            <a href="https://www.linkedin.com/company/elastos/" target="_blank" rel="noopener noreferrer">
              <Button variant="outline" size="icon" className="rounded-full">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19 0H5C2.239 0 0 2.239 0 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5V5c0-2.761-2.239-5-5-5zm-11 19h-3v-9h3v9zm14.293-9.293c1.083 0 1.958.775 1.958 1.716v5.591c0 1.002-.875 1.716-1.958 1.716h-3v-9h3v-2.293c0-.621-.167-1.13-.483-1.528-.317-.397-.757-.663-1.28-.772h-3v9h-3v-9h-3c-.522 0-.965.352-1.28.772-.316.398-.483.907-.483 1.528v2.293h-3v9h3v-5.591c0-.941.875-1.716 1.958-1.716h3z"/>
                </svg>
                <span className="sr-only">LinkedIn</span>
              </Button>
            </a>
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