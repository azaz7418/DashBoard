import { productsData } from '@/components/data/DummyData';
import { EditIcon } from 'lucide-react';
import React from 'react';

export default function ProductsPage() {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6 text-foreground">Products</h1>
      <div className="bg-white/50 dark:bg-black/20 p-6 rounded-xl border border-border shadow-sm">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr>
              <th className="text-left p-2 border-b border-border">Product Image</th>
              <th className="text-left p-2 border-b border-border">Name</th>
              <th className="text-left p-2 border-b border-border">Category</th>
              <th className="text-left p-2 border-b border-border">Price</th>
              <th className="text-left p-2 border-b border-border">Stock</th>
              <th className="text-left p-2 border-b border-border">Status</th>
              <th className="text-left p-2 border-b border-border">Actions</th>
            </tr>
          </thead>
          <tbody>
            {productsData.map((product) => (
              <tr key={product.id} className="hover:bg-muted/10">
                <td className="p-2 border-b border-border">
                 
                  {/* <Image src={product.image} alt={product.name} className="w-16 h-16 object-cover rounded-md" /> */}
                </td>
                <td className="p-2 border-b border-border">{product.name}</td>
                <td className="p-2 border-b border-border">{product.category}</td>
                <td className="p-2 border-b border-border">${product.price.toFixed(2)}</td>
                <td className="p-2 border-b border-border">{product.stock}</td>
                <td className="p-2 border-b border-border">
                  <span className={`px-2 py-1 rounded-full text-sm ${
                    product.status === 'Active' ? 'bg-success-light text-success' :
                    product.status === 'Low Stock' ? 'bg-warning-light text-warning' :
                    'bg-error-light text-error'
                  }`}>
                    {product.status}
                  </span>
                </td>
                <td className="p-2 border-b border-border">
                  <button className="px-3 py-1 bg-primary text-white rounded-md text-sm hover:bg-primary/80">
                    <EditIcon className="inline-block w-4 h-4 mr-1" />
                  </button>

                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
