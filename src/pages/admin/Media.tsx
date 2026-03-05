import { useState } from 'react';
import { storage, Partner, PortfolioItem } from '../../lib/storage';
import { Plus, Trash2, Save, X } from 'lucide-react';

export default function AdminMedia() {
  const [activeTab, setActiveTab] = useState<'partners' | 'portfolio'>('partners');
  const [partners, setPartners] = useState<Partner[]>(storage.getPartners());
  const [portfolio, setPortfolio] = useState<PortfolioItem[]>(storage.getPortfolio());
  
  const [isAdding, setIsAdding] = useState(false);
  const [newItem, setNewItem] = useState<any>({});

  const handleDeletePartner = (id: string) => {
    if (confirm('Delete this partner?')) {
      const newPartners = partners.filter(p => p.id !== id);
      setPartners(newPartners);
      storage.savePartners(newPartners);
    }
  };

  const handleDeletePortfolio = (id: string) => {
    if (confirm('Delete this item?')) {
      const newPortfolio = portfolio.filter(p => p.id !== id);
      setPortfolio(newPortfolio);
      storage.savePortfolio(newPortfolio);
    }
  };

  const handleSavePartner = () => {
    if (!newItem.name || !newItem.logoUrl) return;
    const partner: Partner = {
      id: Date.now().toString(),
      name: newItem.name,
      logoUrl: newItem.logoUrl
    };
    const newPartners = [...partners, partner];
    setPartners(newPartners);
    storage.savePartners(newPartners);
    setIsAdding(false);
    setNewItem({});
  };

  const handleSavePortfolio = () => {
    if (!newItem.title || !newItem.imageUrl) return;
    const item: PortfolioItem = {
      id: Date.now().toString(),
      title: newItem.title,
      category: newItem.category || 'General',
      imageUrl: newItem.imageUrl,
      description: newItem.description || ''
    };
    const newPortfolio = [...portfolio, item];
    setPortfolio(newPortfolio);
    storage.savePortfolio(newPortfolio);
    setIsAdding(false);
    setNewItem({});
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-2xl font-bold text-navy-900">Media Management</h1>
        <button
          onClick={() => { setIsAdding(true); setNewItem({}); }}
          className="flex items-center gap-2 bg-turquoise-500 text-navy-900 px-4 py-2 rounded-lg font-bold hover:bg-turquoise-600 transition-colors"
        >
          <Plus size={18} />
          Add New {activeTab === 'partners' ? 'Partner' : 'Item'}
        </button>
      </div>

      {/* Tabs */}
      <div className="flex gap-4 mb-8 border-b border-gray-200">
        <button
          onClick={() => { setActiveTab('partners'); setIsAdding(false); }}
          className={`pb-4 px-4 font-medium transition-colors relative ${
            activeTab === 'partners' ? 'text-navy-900' : 'text-gray-400 hover:text-gray-600'
          }`}
        >
          Global Partners
          {activeTab === 'partners' && <div className="absolute bottom-0 left-0 w-full h-0.5 bg-turquoise-500" />}
        </button>
        <button
          onClick={() => { setActiveTab('portfolio'); setIsAdding(false); }}
          className={`pb-4 px-4 font-medium transition-colors relative ${
            activeTab === 'portfolio' ? 'text-navy-900' : 'text-gray-400 hover:text-gray-600'
          }`}
        >
          Portfolio Gallery
          {activeTab === 'portfolio' && <div className="absolute bottom-0 left-0 w-full h-0.5 bg-turquoise-500" />}
        </button>
      </div>

      {/* Add New Form */}
      {isAdding && (
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 mb-8">
          <div className="flex justify-between items-center mb-4">
            <h3 className="font-bold text-navy-900">Add New {activeTab === 'partners' ? 'Partner' : 'Portfolio Item'}</h3>
            <button onClick={() => setIsAdding(false)}><X size={20} className="text-gray-400" /></button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {activeTab === 'partners' ? (
              <>
                <input
                  placeholder="Partner Name"
                  className="border p-2 rounded"
                  value={newItem.name || ''}
                  onChange={e => setNewItem({...newItem, name: e.target.value})}
                />
                <input
                  placeholder="Logo URL"
                  className="border p-2 rounded"
                  value={newItem.logoUrl || ''}
                  onChange={e => setNewItem({...newItem, logoUrl: e.target.value})}
                />
              </>
            ) : (
              <>
                <input
                  placeholder="Title"
                  className="border p-2 rounded"
                  value={newItem.title || ''}
                  onChange={e => setNewItem({...newItem, title: e.target.value})}
                />
                <input
                  placeholder="Category"
                  className="border p-2 rounded"
                  value={newItem.category || ''}
                  onChange={e => setNewItem({...newItem, category: e.target.value})}
                />
                <input
                  placeholder="Image URL"
                  className="border p-2 rounded md:col-span-2"
                  value={newItem.imageUrl || ''}
                  onChange={e => setNewItem({...newItem, imageUrl: e.target.value})}
                />
                <textarea
                  placeholder="Description"
                  className="border p-2 rounded md:col-span-2"
                  rows={2}
                  value={newItem.description || ''}
                  onChange={e => setNewItem({...newItem, description: e.target.value})}
                />
              </>
            )}
          </div>
          
          <div className="mt-4 flex justify-end">
            <button
              onClick={activeTab === 'partners' ? handleSavePartner : handleSavePortfolio}
              className="bg-turquoise-500 text-navy-900 px-6 py-2 rounded-lg font-bold flex items-center gap-2"
            >
              <Save size={18} /> Save
            </button>
          </div>
        </div>
      )}

      {/* Grid Display */}
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {activeTab === 'partners' ? (
          partners.map(partner => (
            <div key={partner.id} className="bg-white p-4 rounded-xl shadow-sm border border-gray-200 relative group">
              <div className="aspect-video flex items-center justify-center bg-gray-50 rounded-lg mb-3 p-4">
                <img src={partner.logoUrl} alt={partner.name} className="max-w-full max-h-full object-contain" />
              </div>
              <p className="font-bold text-center text-navy-900">{partner.name}</p>
              <button
                onClick={() => handleDeletePartner(partner.id)}
                className="absolute top-2 right-2 p-2 bg-red-100 text-red-600 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
              >
                <Trash2 size={16} />
              </button>
            </div>
          ))
        ) : (
          portfolio.map(item => (
            <div key={item.id} className="bg-white p-4 rounded-xl shadow-sm border border-gray-200 relative group">
              <div className="aspect-[3/4] overflow-hidden rounded-lg mb-3">
                <img src={item.imageUrl} alt={item.title} className="w-full h-full object-cover" />
              </div>
              <p className="text-xs text-turquoise-600 font-bold uppercase">{item.category}</p>
              <p className="font-bold text-navy-900 truncate">{item.title}</p>
              <button
                onClick={() => handleDeletePortfolio(item.id)}
                className="absolute top-2 right-2 p-2 bg-red-100 text-red-600 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
              >
                <Trash2 size={16} />
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
