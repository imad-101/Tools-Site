import { ToolCard } from "@/components/ToolCard";
import { Category } from "@/lib/data/tools";

interface CategoriesViewProps {
  categories: Category[];
}

export const CategoriesView = ({ categories }: CategoriesViewProps) => {
  return (
    <div className="space-y-12">
      {categories.map((category) => {
        const IconComponent = category.icon;
        return (
          <div key={category.name}>
            <div className="flex items-center mb-6">
              <div
                className={`w-12 h-12 rounded-xl bg-gradient-to-r ${category.color} flex items-center justify-center mr-4 shadow-lg`}
              >
                <IconComponent className="w-6 h-6 text-white" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-foreground">
                  {category.name}
                </h2>
                <p className="text-muted-foreground">{category.description}</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-6 gap-4">
              {category.tools.map((tool) => (
                <ToolCard key={tool.id} tool={tool} variant="compact" />
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
};
