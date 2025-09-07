import React from "react";
import { motion } from "framer-motion";
import { Palette } from "lucide-react";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";

export function Design() {
  const { ref, isIntersecting } = useIntersectionObserver();

  const designAreas = [
    {
      title: "UI/UX Design",
      description: "Crafting intuitive user interfaces and seamless user experiences for web and mobile applications.",
      image: "https://images.unsplash.com/photo-1561736778-92e52a7769ef?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600",
      tools: ["Figma", "Adobe XD", "Sketch", "Prototyping"],
      color: "primary",
    },
    {
      title: "Brand Identity",
      description: "Developing cohesive brand identities that communicate values and create lasting impressions.",
      image: "https://images.unsplash.com/photo-1558655146-d09347e92766?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600",
      tools: ["Logo Design", "Typography", "Color Theory", "Style Guides"],
      color: "secondary",
    },
    {
      title: "Motion Graphics",
      description: "Bringing designs to life through animation and interactive motion graphics that engage users.",
      image: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600",
      tools: ["After Effects", "Cinema 4D", "Lottie", "CSS Animation"],
      color: "accent",
    },
    {
      title: "Web Development",
      description: "Building responsive, performant websites that bring designs to life with clean, maintainable code.",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600",
      tools: ["React", "Next.js", "Three.js", "Tailwind CSS"],
      color: "primary",
    },
  ];

  return (
    <section id="design" ref={ref} className="py-20" data-testid="design-section">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isIntersecting ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-tech font-bold mb-4 text-primary">
            <Palette className="inline-block w-10 h-10 mr-4" />
            DESIGN
          </h2>
          <p className="text-xl text-muted-foreground">Creating digital experiences that inspire and engage</p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {designAreas.map((area, index) => (
            <motion.div
              key={area.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isIntersecting ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 + index * 0.1 }}
              className="glass-effect p-8 rounded-xl hover-tilt"
              data-testid={`design-area-${area.title.toLowerCase().replace(/[^a-z0-9]/g, '-')}`}
            >
              <img
                src={area.image}
                alt={area.title}
                className="w-full h-48 object-cover rounded-lg mb-6"
              />
              <h3 className={`text-2xl font-semibold mb-4 text-${area.color}`}>{area.title}</h3>
              <p className="text-muted-foreground mb-4">{area.description}</p>
              <div className="flex flex-wrap gap-2">
                {area.tools.map((tool) => (
                  <span
                    key={tool}
                    className={`px-3 py-1 bg-${area.color}/20 text-${area.color} rounded-full text-sm`}
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
