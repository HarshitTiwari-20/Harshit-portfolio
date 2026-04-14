export default function Footer() {
  return (
    <footer className="border-t border-white/10 glass py-8 text-center mt-20 relative z-10">
      <div className="container mx-auto px-6">
        <p className="text-gray-400 font-medium font-mono text-sm">
          &copy; {new Date().getFullYear()} Harshit. Built with Next.js, Tailwind & Framer Motion. 
        </p>
      </div>
    </footer>
  );
}
