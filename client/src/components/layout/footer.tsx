export function Footer() {
  return (
    <footer className="py-12 bg-card border-t border-border" data-testid="footer">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="text-2xl font-tech font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-4 md:mb-0">
            ALEX CHEN
          </div>
          <div className="text-muted-foreground text-center md:text-right">
            <p>&copy; 2024 Alex Chen. All rights reserved.</p>
            <p className="text-sm mt-1">
              Crafted with <span className="text-red-500">♥</span> using React & Three.js
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
