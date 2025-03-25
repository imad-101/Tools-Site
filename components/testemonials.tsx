import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export function Testimonials() {
  const testimonials = [
    {
      name: "Alex Johnson",
      role: "Web Developer",
      content:
        "These tools have saved me countless hours of work. The interface is intuitive and the tools are powerful.",
      avatar: "AJ",
    },
    {
      name: "Sarah Williams",
      role: "Graphic Designer",
      content:
        "I use ToolMaster daily for my design work. The design tools are exceptional and have become essential to my workflow.",
      avatar: "SW",
    },
    {
      name: "Michael Chen",
      role: "Product Manager",
      content:
        "The productivity tools have transformed how our team works. We're more efficient and organized than ever before.",
      avatar: "MC",
    },
    {
      name: "Emily Rodriguez",
      role: "Content Creator",
      content:
        "As a content creator, I rely on these tools every day. They're simple to use yet incredibly powerful.",
      avatar: "ER",
    },
  ];

  return (
    <section id="testimonials" className="w-full py-12 md:py-24 bg-slate-50">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-blue-100 px-3 py-1 text-sm text-blue-900">
              Testimonials
            </div>
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight text-slate-900">
              What Our Users Say
            </h2>
            <p className="max-w-[900px] text-slate-600 md:text-xl/relaxed">
              Don't just take our word for it. Here's what people are saying
              about our tools.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl gap-6 py-12 md:grid-cols-2 lg:grid-cols-2">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="border bg-white border-slate-200 shadow-sm"
            >
              <CardHeader className="pb-2">
                <div className="flex items-center gap-4">
                  <Avatar>
                    <AvatarImage
                      src={`/placeholder.svg?text=${testimonial.avatar}`}
                      alt={testimonial.name}
                    />
                    <AvatarFallback className="bg-blue-100 text-blue-900">
                      {testimonial.avatar}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <h3 className="text-lg font-semibold text-slate-900">
                      {testimonial.name}
                    </h3>
                    <p className="text-sm text-slate-500">{testimonial.role}</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600">"{testimonial.content}"</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
