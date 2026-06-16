import { useEffect, useRef, useState } from 'react';
import { assets, blogCategories } from '../../assets/assets';
import Quill from 'quill';
import 'quill/dist/quill.snow.css';

const AddBlog = () => {

  const editorRef = useRef(null);
  const quillRef = useRef(null);

  const [image, setImage] = useState(null);
  const [title, setTitle] = useState('');
  const [subTitle, setSubTitle] = useState('');
  const [category, setCategory] = useState('Startup');
  const [isPublished, setIsPublished] = useState(false);
  const [loading, setLoading] = useState(false);
  const [isAdding, setIsAdding] = useState(false);

  const generateContent = () => {
    setLoading(true);
    setTimeout(() => {
      const content = `<h2>${title || 'My Blog Title'}</h2><p>AI generated demo content ✨</p>`;
      if (quillRef.current) quillRef.current.root.innerHTML = content;
      setLoading(false);
    }, 800);
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    setIsAdding(true);

    const blogData = { title, subTitle, category, isPublished, description: quillRef.current?.root.innerHTML, image };
    console.log("BLOG DATA:", blogData);

    setTimeout(() => {
      alert("Saved locally!");
      setIsAdding(false);
      setTitle(''); setSubTitle(''); setImage(null); setCategory('Startup'); setIsPublished(false);
      if (quillRef.current) quillRef.current.root.innerHTML = '';
    }, 800);
  };

  useEffect(() => {
    if (!quillRef.current && editorRef.current) {
      quillRef.current = new Quill(editorRef.current, { theme: 'snow', placeholder: 'Write your blog...' });
    }
  }, []);

  return (
    <form onSubmit={onSubmitHandler} className="flex-1 bg-linear-to-br from-slate-50 via-blue-50 to-purple-50 min-h-screen p-4 md:p-10 text-gray-700">

      <div className="max-w-4xl mx-auto bg-white/70 backdrop-blur-xl border border-white/40 rounded-3xl shadow-xl p-6 md:p-10">

        <h2 className="text-2xl font-bold mb-6">✍️ Create Blog</h2>

        <p className="text-sm font-medium">Thumbnail</p>
        <label htmlFor="image">
          <img src={!image ? assets.upload_area : URL.createObjectURL(image)} className="mt-2 h-20 w-32 object-cover rounded-xl border hover:scale-105 transition-all" />
          <input type="file" hidden id="image" onChange={(e) => setImage(e.target.files[0])} />
        </label>

        <p className="mt-6 text-sm font-medium">Title</p>
        <input value={title} onChange={(e) => setTitle(e.target.value)} className="w-full mt-2 p-3 border rounded-xl outline-none" />

        <p className="mt-4 text-sm font-medium">Subtitle</p>
        <input value={subTitle} onChange={(e) => setSubTitle(e.target.value)} className="w-full mt-2 p-3 border rounded-xl outline-none" />

        <p className="mt-6 text-sm font-medium">Content</p>
        <div className="relative mt-2 border rounded-xl overflow-hidden">
          <div ref={editorRef} className="bg-white min-h-50" />
          {loading && <div className="absolute inset-0 flex items-center justify-center bg-black/10"><div className="w-8 h-8 border-2 border-t-transparent border-cyan-500 rounded-full animate-spin"></div></div>}
          <button type="button" onClick={generateContent} className="absolute bottom-2 right-2 text-xs bg-black text-white px-4 py-1.5 rounded-lg">AI</button>
        </div>

        <p className="mt-6 text-sm font-medium">Category</p>
        <select value={category} onChange={(e) => setCategory(e.target.value)} className="w-full mt-2 p-3 border rounded-xl">
          {blogCategories.map((item, i) => <option key={i}>{item}</option>)}
        </select>

        <div className="flex items-center gap-2 mt-6">
          <input type="checkbox" checked={isPublished} onChange={(e) => setIsPublished(e.target.checked)} />
          <p className="text-sm">Publish</p>
        </div>

        <button type="submit" disabled={isAdding} className="mt-8 w-full md:w-44 bg-linear-to-r from-cyan-500 to-blue-600 text-white py-3 rounded-xl">
          {isAdding ? "Saving..." : "Save"}
        </button>

      </div>

    </form>
  );
};

export default AddBlog;