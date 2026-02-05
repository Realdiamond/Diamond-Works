"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";
import Link from "next/link";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { ArrowRight, Home } from "lucide-react";

const NotFound = () => {
  const pathname = usePathname();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", pathname);
  }, [pathname]);

  return (
    <Layout>
      <section className="section-padding bg-background min-h-[60vh] flex items-center">
        <div className="container-wide">
          <div className="max-w-2xl mx-auto text-center">
            <div className="font-heading text-8xl md:text-9xl font-bold text-accent/20 mb-4">
              404
            </div>
            <h1 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
              Page Not Found
            </h1>
            <p className="text-muted-foreground text-lg mb-8">
              The page you're looking for doesn't exist or has been moved. 
              Let's get you back on track.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="accent" size="lg" asChild>
                <Link href="/">
                  <Home className="w-4 h-4" />
                  Back to Home
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="/contact">
                  Contact Us
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default NotFound;
