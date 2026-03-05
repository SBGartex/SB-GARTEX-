import { useState } from 'react';
import { storage, BlogPost } from '../../lib/storage';
import { Plus, Trash2, Edit, Save, X } from 'lucide-react';

export default function AdminPosts() {
  const [posts, setPosts] = useState<BlogPost[]>(storage.getPosts());
  const [isEditing, setIsEditing] = useState(false);
  const [currentPost, setCurrentPost] = useState<Partial<BlogPost>>({});

  const handleDelete = (id: string) => {
    if (confirm('Are you sure you want to delete this post?')) {
      const newPosts = posts.filter(p => p.id !== id);
      setPosts(newPosts);
      storage.savePosts(newPosts);
    }
  };

  const handleEdit = (post: BlogPost) => {
    setCurrentPost(post);
    setIsEditing(true);
  };

  const handleAddNew = () => {
    setCurrentPost({
      id: Date.now().toString(),
      title: '',
      excerpt: '',
      content: '',
      date: new Date().toISOString().split('T')[0],
      imageUrl: ''
    });
    setIsEditing(true);
  };

  const handleSave = () => {
    if (!currentPost.title || !currentPost.content) return;

    let newPosts;
    const existingIndex = posts.findIndex(p => p.id === currentPost.id);
    
    if (existingIndex >= 0) {
      newPosts = [...posts];
      newPosts[existingIndex] = currentPost as BlogPost;
    } else {
      newPosts = [...posts, currentPost as BlogPost];
    }

    setPosts(newPosts);
    storage.savePosts(newPosts);
    setIsEditing(false);
    setCurrentPost({});
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-2xl font-bold text-navy-900">Manage Posts</h1>
        <button
          onClick={handleAddNew}
          className="flex items-center gap-2 bg-turquoise-500 text-navy-900 px-4 py-2 rounded-lg font-bold hover:bg-turquoise-600 transition-colors"
        >
          <Plus size={18} />
          Add New Post
        </button>
      </div>

      {isEditing ? (
        <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-200">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-bold text-navy-900">
              {posts.find(p => p.id === currentPost.id) ? 'Edit Post' : 'New Post'}
            </h2>
            <button onClick={() => setIsEditing(false)} className="text-gray-500 hover:text-red-500">
              <X size={24} />
            </button>
          </div>
          
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Title</label>
              <input
                type="text"
                value={currentPost.title}
                onChange={e => setCurrentPost({...currentPost, title: e.target.value})}
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-turquoise-500 outline-none text-navy-900"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Date</label>
              <input
                type="date"
                value={currentPost.date}
                onChange={e => setCurrentPost({...currentPost, date: e.target.value})}
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-turquoise-500 outline-none text-navy-900"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Image URL</label>
              <input
                type="text"
                value={currentPost.imageUrl}
                onChange={e => setCurrentPost({...currentPost, imageUrl: e.target.value})}
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-turquoise-500 outline-none text-navy-900"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Excerpt</label>
              <textarea
                value={currentPost.excerpt}
                onChange={e => setCurrentPost({...currentPost, excerpt: e.target.value})}
                rows={2}
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-turquoise-500 outline-none text-navy-900"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Content</label>
              <textarea
                value={currentPost.content}
                onChange={e => setCurrentPost({...currentPost, content: e.target.value})}
                rows={6}
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-turquoise-500 outline-none text-navy-900"
              />
            </div>
            <div className="flex justify-end gap-4">
              <button
                onClick={() => setIsEditing(false)}
                className="px-6 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50"
              >
                Cancel
              </button>
              <button
                onClick={handleSave}
                className="px-6 py-2 bg-turquoise-500 text-navy-900 rounded-lg font-bold hover:bg-turquoise-600 flex items-center gap-2"
              >
                <Save size={18} />
                Save Post
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-4">
          {posts.map((post) => (
            <div key={post.id} className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 flex flex-col md:flex-row md:items-center gap-6">
              <div className="w-full md:w-32 h-20 bg-gray-100 rounded-lg overflow-hidden shrink-0">
                {post.imageUrl && (
                  <img src={post.imageUrl} alt={post.title} className="w-full h-full object-cover" />
                )}
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-navy-900 text-lg">{post.title}</h3>
                <p className="text-gray-500 text-sm mb-1">{post.date}</p>
                <p className="text-gray-600 text-sm line-clamp-1">{post.excerpt}</p>
              </div>
              <div className="flex gap-2">
                <button
                  onClick={() => handleEdit(post)}
                  className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                >
                  <Edit size={20} />
                </button>
                <button
                  onClick={() => handleDelete(post.id)}
                  className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                >
                  <Trash2 size={20} />
                </button>
              </div>
            </div>
          ))}
          {posts.length === 0 && (
            <div className="text-center py-12 text-gray-500">
              No posts found. Create your first one!
            </div>
          )}
        </div>
      )}
    </div>
  );
}
