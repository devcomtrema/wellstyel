import React, { useState, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { PRODUCTS } from '../constants';
import { Category, Product, BadgeType } from '../types';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { SearchIcon } from './ui/Icons';

const badgeColors: Record<BadgeType, string> = {
  new: 'bg-brand-green text-white',
  premium: 'bg-gold-gradient text-white',
  limited: 'bg-gray-800 dark:bg-gray-200 dark:text-black text-white',
};

// FIX: Explicitly type ProductCard as React.FC to allow 'key' prop when used in lists.
const ProductCard: React.FC<{ product: Product }> = ({ product }) => {
  const { t } = useTranslation();
  return (
    <div className="group relative overflow-hidden rounded-lg shadow-lg bg-white dark:bg-dark-card transition-transform duration-300 hover:-translate-y-2">
      {product.badge && (
        <div className={`absolute top-3 right-3 text-xs font-bold uppercase px-3 py-1 rounded-full z-10 ${badgeColors[product.badge]}`}>
          {t(`products.badges.${product.badge}`)}
        </div>
      )}
      <img src={product.image} alt={product.name} className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110" loading="lazy" />
      <div className="p-6">
        <h3 className="text-xl font-bold font-heading mb-2">{product.name}</h3>
        <p className="text-gray-600 dark:text-gray-400 mb-4 text-sm">{product.description}</p>
        <div className="flex justify-between items-center">
            <span className="text-2xl font-bold text-brand-green dark:text-brand-green-dark">{product.price}</span>
            <button className="px-5 py-2 text-sm font-bold text-white bg-brand-gold dark:bg-brand-gold-dark rounded-full hover:opacity-90 transition-opacity">
                {t('products.modalAction')}
            </button>
        </div>
      </div>
    </div>
  );
};

const Products = () => {
  const { t } = useTranslation();
  const [activeCategory, setActiveCategory] = useState<Category>('all');
  const [searchTerm, setSearchTerm] = useState('');
  const { ref, animationClasses } = useScrollAnimation();

  const categories: { key: Category; label: string }[] = [
    { key: 'all', label: t('products.categories.all') },
    { key: 'cosmetics', label: t('products.categories.cosmetics') },
    { key: 'beauty', label: t('products.categories.beauty') },
    { key: 'gym', label: t('products.categories.gym') },
    { key: 'accessories', label: t('products.categories.accessories') },
  ];

  const filteredProducts = useMemo(() => {
    let products = PRODUCTS;

    if (activeCategory !== 'all') {
      products = products.filter(p => p.category === activeCategory);
    }

    if (searchTerm.trim() !== '') {
      const lowercasedTerm = searchTerm.toLowerCase();
      products = products.filter(p => 
        p.name.toLowerCase().includes(lowercasedTerm) || 
        p.description.toLowerCase().includes(lowercasedTerm)
      );
    }

    return products;
  }, [activeCategory, searchTerm]);

  return (
    <section id="products" className="py-20 sm:py-32" ref={ref as React.RefObject<HTMLDivElement>}>
      <div className={`container mx-auto px-4 sm:px-6 lg:px-8 transition-all duration-1000 ease-out ${animationClasses}`}>
        <h2 className="text-3xl md:text-4xl font-bold font-heading text-center mb-12">
          {t('products.title')}
        </h2>
        
        <div className="max-w-md mx-auto mb-8">
            <div className="relative">
                <span className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <SearchIcon className="w-5 h-5 text-gray-400" />
                </span>
                <input
                    type="search"
                    placeholder={t('products.searchPlaceholder')}
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-full bg-white dark:bg-dark-card dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-brand-green dark:focus:ring-brand-green-dark"
                />
            </div>
        </div>

        <div className="flex justify-center flex-wrap gap-2 md:gap-4 mb-12">
          {categories.map(({ key, label }) => (
            <button
              key={key}
              onClick={() => setActiveCategory(key)}
              className={`px-6 py-2 text-sm font-semibold rounded-full transition-all duration-300 ${activeCategory === key ? 'bg-brand-green dark:bg-brand-green-dark text-white' : 'bg-gray-200 dark:bg-dark-card hover:bg-gray-300 dark:hover:bg-gray-700'}`}
            >
              {label}
            </button>
          ))}
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;