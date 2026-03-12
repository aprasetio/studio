'use client';

import React, { useState, useMemo, useEffect } from 'react';
import { useLocalStorage } from 'usehooks-ts';
import { useLang } from '@/components/Providers';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { 
  Lightbulb, 
  Plus, 
  Search, 
  Mic, 
  MicOff, 
  Trash2, 
  Edit3, 
  Tag, 
  Download, 
  Upload, 
  Filter,
  CheckCircle2,
  Clock,
  AlertCircle,
  MoreVertical,
  X
} from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Badge } from '@/components/ui/badge';
import { toast } from '@/hooks/use-toast';
import TrustBadges from '@/components/ui/TrustBadges';
import { SmartAd } from '@/components/smart-ad';
import { DataPersistence } from '@/components/DataPersistence';
import { ArticleSection } from '@/components/ArticleSection';
import { cn } from '@/lib/utils';

type Priority = 'High' | 'Medium' | 'Low';
type Status = 'Idea' | 'In Progress' | 'Done';

interface Idea {
  id: string;
  title: string;
  description: string;
  tags: string[];
  priority: Priority;
  status: Status;
  createdAt: number;
}

const UI_TEXT: Record<string, any> = {
  en: {
    title: "Idea Tracker",
    add_btn: "New Idea",
    search_ph: "Search ideas, tags...",
    all_status: "All Status",
    all_priority: "All Priority",
    no_ideas: "No ideas found. Start by capturing your first thought!",
    voice_start: "Listening...",
    voice_stop: "Voice dictation stopped.",
    voice_err: "Speech recognition not supported in this browser.",
    export: "Backup Ideas",
    import: "Restore Backup",
    edit_title: "Edit Idea",
    create_title: "Capture New Idea",
    lbl_title: "Title",
    lbl_desc: "Description",
    lbl_tags: "Tags (comma separated)",
    lbl_priority: "Priority",
    lbl_status: "Status",
    save: "Save Idea",
    cancel: "Cancel"
  },
  id: {
    title: "Pelacak Ide",
    add_btn: "Ide Baru",
    search_ph: "Cari ide, tag...",
    all_status: "Semua Status",
    all_priority: "Semua Prioritas",
    no_ideas: "Belum ada ide. Mulailah dengan mencatat pemikiran pertama Anda!",
    voice_start: "Mendengarkan...",
    voice_stop: "Dikte suara berhenti.",
    voice_err: "Pengenalan suara tidak didukung di browser ini.",
    export: "Cadangkan Ide",
    import: "Pulihkan Cadangan",
    edit_title: "Edit Ide",
    create_title: "Catat Ide Baru",
    lbl_title: "Judul",
    lbl_desc: "Deskripsi",
    lbl_tags: "Tag (pisahkan dengan koma)",
    lbl_priority: "Prioritas",
    lbl_status: "Status",
    save: "Simpan Ide",
    cancel: "Batal"
  }
};

export default function IdeaTrackerPage() {
  const { lang } = useLang();
  const t = (key: string) => UI_TEXT[lang]?.[key] || UI_TEXT['en'][key];

  const [ideas, setIdeas] = useLocalStorage<Idea[]>('versokit-ideas', []);
  const [search, setSearch] = useState('');
  const [statusFilter, setStatusFilter] = useState<string>('all');
  const [priorityFilter, setPriorityFilter] = useState<string>('all');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingIdea, setEditingIdea] = useState<Idea | null>(null);
  const [isListening, setIsListening] = useState(false);
  const [mounted, setMounted] = useState(false);

  // Form State
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    tags: '',
    priority: 'Medium' as Priority,
    status: 'Idea' as Status
  });

  useEffect(() => { setMounted(true); }, []);

  const filteredIdeas = useMemo(() => {
    return ideas.filter(idea => {
      const matchesSearch = idea.title.toLowerCase().includes(search.toLowerCase()) || 
                           idea.description.toLowerCase().includes(search.toLowerCase()) ||
                           idea.tags.some(tag => tag.toLowerCase().includes(search.toLowerCase()));
      const matchesStatus = statusFilter === 'all' || idea.status === statusFilter;
      const matchesPriority = priorityFilter === 'all' || idea.priority === priorityFilter;
      return matchesSearch && matchesStatus && matchesPriority;
    }).sort((a, b) => b.createdAt - a.createdAt);
  }, [ideas, search, statusFilter, priorityFilter]);

  const handleAddEdit = () => {
    if (!formData.title.trim()) {
      toast({ title: "Judul wajib diisi", variant: "destructive" });
      return;
    }

    const tagsArray = formData.tags.split(',').map(tag => tag.trim()).filter(tag => tag !== '');

    if (editingIdea) {
      setIdeas(ideas.map(i => i.id === editingIdea.id ? { 
        ...i, 
        ...formData, 
        tags: tagsArray 
      } : i));
      toast({ title: "Ide diperbarui!" });
    } else {
      const newIdea: Idea = {
        id: crypto.randomUUID(),
        ...formData,
        tags: tagsArray,
        createdAt: Date.now()
      };
      setIdeas([newIdea, ...ideas]);
      toast({ title: "Ide berhasil disimpan!" });
    }

    closeForm();
  };

  const deleteIdea = (id: string) => {
    if (confirm("Hapus ide ini?")) {
      setIdeas(ideas.filter(i => i.id !== id));
      toast({ title: "Ide dihapus." });
    }
  };

  const openEdit = (idea: Idea) => {
    setEditingIdea(idea);
    setFormData({
      title: idea.title,
      description: idea.description,
      tags: idea.tags.join(', '),
      priority: idea.priority,
      status: idea.status
    });
    setIsModalOpen(true);
  };

  const closeForm = () => {
    setIsModalOpen(false);
    setEditingIdea(null);
    setFormData({ title: '', description: '', tags: '', priority: 'Medium', status: 'Idea' });
  };

  const handleVoiceDictation = () => {
    const SpeechRecognition = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
    
    if (!SpeechRecognition) {
      toast({ title: "Error", description: t('voice_err'), variant: "destructive" });
      return;
    }

    const recognition = new SpeechRecognition();
    recognition.lang = lang === 'id' ? 'id-ID' : 'en-US';
    recognition.continuous = false;
    recognition.interimResults = false;

    recognition.onstart = () => {
      setIsListening(true);
      toast({ title: t('voice_start') });
    };

    recognition.onresult = (event: any) => {
      const transcript = event.results[0][0].transcript;
      setFormData(prev => ({ ...prev, description: prev.description + (prev.description ? ' ' : '') + transcript }));
      setIsListening(false);
    };

    recognition.onerror = () => {
      setIsListening(false);
    };

    recognition.onend = () => {
      setIsListening(false);
    };

    recognition.start();
  };

  const handleRestore = (data: any) => {
    if (Array.isArray(data)) {
      setIdeas(data);
    }
  };

  if (!mounted) return null;

  return (
    <div className="flex flex-col items-center p-4 md:p-8 lg:p-12 max-w-7xl mx-auto w-full gap-8">
      <div className="text-center space-y-2">
        <h1 className="text-4xl font-black uppercase tracking-tighter text-foreground flex items-center justify-center gap-3">
          <Lightbulb className="h-8 w-8 text-primary animate-pulse" />
          {t('title')}
        </h1>
        <TrustBadges />
      </div>

      {/* Toolbar */}
      <div className="w-full flex flex-col md:flex-row gap-4 items-center justify-between bg-card p-6 rounded-[2.5rem] border-2 shadow-xl">
        <div className="relative flex-1 w-full max-w-md">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
          <Input 
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder={t('search_ph')}
            className="pl-12 h-14 rounded-2xl border-none bg-muted/50 font-medium text-lg focus-visible:ring-primary"
          />
        </div>

        <div className="flex flex-wrap gap-2 w-full md:w-auto">
          <Select value={statusFilter} onValueChange={setStatusFilter}>
            <SelectTrigger className="w-[140px] h-14 rounded-2xl border-2 font-bold uppercase text-[10px] tracking-widest">
              <SelectValue placeholder={t('all_status')} />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">{t('all_status')}</SelectItem>
              <SelectItem value="Idea">Idea</SelectItem>
              <SelectItem value="In Progress">In Progress</SelectItem>
              <SelectItem value="Done">Done</SelectItem>
            </SelectContent>
          </Select>

          <Select value={priorityFilter} onValueChange={setPriorityFilter}>
            <SelectTrigger className="w-[140px] h-14 rounded-2xl border-2 font-bold uppercase text-[10px] tracking-widest">
              <SelectValue placeholder={t('all_priority')} />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">{t('all_priority')}</SelectItem>
              <SelectItem value="High">High</SelectItem>
              <SelectItem value="Medium">Medium</SelectItem>
              <SelectItem value="Low">Low</SelectItem>
            </SelectContent>
          </Select>

          <Button 
            onClick={() => setIsModalOpen(true)}
            className="h-14 px-8 bg-primary hover:bg-primary/90 text-white font-black uppercase tracking-widest rounded-2xl shadow-xl flex-1 md:flex-none"
          >
            <Plus className="mr-2 h-6 w-6" /> {t('add_btn')}
          </Button>
        </div>
      </div>

      {/* Grid Display */}
      {filteredIdeas.length === 0 ? (
        <div className="py-24 text-center space-y-4 opacity-30 flex flex-col items-center">
          <Lightbulb className="h-20 w-20" />
          <p className="font-black uppercase tracking-widest max-w-sm">{t('no_ideas')}</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full animate-in fade-in slide-in-from-bottom-4 duration-700">
          {filteredIdeas.map((idea) => (
            <Card key={idea.id} className="group border-2 hover:border-primary/20 transition-all duration-300 rounded-[2rem] overflow-hidden flex flex-col bg-card shadow-sm hover:shadow-2xl">
              <div className={cn(
                "h-2 w-full",
                idea.priority === 'High' ? "bg-red-500" : idea.priority === 'Medium' ? "bg-orange-400" : "bg-blue-400"
              )} />
              <CardHeader className="p-6 pb-2">
                <div className="flex justify-between items-start">
                  <Badge variant="outline" className="text-[8px] font-black uppercase tracking-widest">
                    {idea.status}
                  </Badge>
                  <div className="flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                    <Button variant="ghost" size="icon" onClick={() => openEdit(idea)} className="h-8 w-8 text-primary">
                      <Edit3 className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="icon" onClick={() => deleteIdea(idea.id)} className="h-8 w-8 text-destructive">
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
                <CardTitle className="text-xl font-black uppercase tracking-tight mt-2">{idea.title}</CardTitle>
              </CardHeader>
              <CardContent className="p-6 pt-2 flex-1">
                <p className="text-sm text-muted-foreground leading-relaxed line-clamp-4 font-medium italic">
                  "{idea.description}"
                </p>
                <div className="flex flex-wrap gap-1.5 mt-4">
                  {idea.tags.map((tag, idx) => (
                    <span key={idx} className="bg-primary/5 text-primary text-[9px] font-bold px-2 py-0.5 rounded-full border border-primary/10">
                      #{tag}
                    </span>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="p-6 bg-muted/20 border-t flex justify-between items-center">
                <div className="flex items-center gap-2 text-[9px] font-bold text-muted-foreground uppercase tracking-widest">
                  <Clock className="h-3 w-3" />
                  {new Date(idea.createdAt).toLocaleDateString()}
                </div>
                <div className="flex items-center gap-1.5">
                  {idea.priority === 'High' && <AlertCircle className="h-4 w-4 text-red-500" />}
                  <span className={cn(
                    "text-[10px] font-black uppercase tracking-tighter",
                    idea.priority === 'High' ? "text-red-500" : "text-muted-foreground"
                  )}>
                    {idea.priority}
                  </span>
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>
      )}

      {/* Persistence Controls */}
      <div className="w-full max-w-xl">
        <DataPersistence 
          data={ideas} 
          onRestore={handleRestore} 
          fileNamePrefix="versokit-ideas" 
        />
      </div>

      {/* Idea Form Modal */}
      <Dialog open={isModalOpen} onOpenChange={(open) => !open && closeForm()}>
        <DialogContent className="rounded-[2.5rem] max-w-2xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-2xl font-black uppercase tracking-tighter flex items-center gap-2">
              <Lightbulb className="text-primary" />
              {editingIdea ? t('edit_title') : t('create_title')}
            </DialogTitle>
            <DialogDescription className="font-medium text-xs uppercase tracking-widest opacity-60">
              Captured locally on your device.
            </DialogDescription>
          </DialogHeader>

          <div className="space-y-6 py-4">
            <div className="space-y-2">
              <label className="text-[10px] font-black uppercase opacity-60 ml-1">{t('lbl_title')}</label>
              <Input 
                value={formData.title}
                onChange={(e) => setFormData({...formData, title: e.target.value})}
                placeholder="The Next Big Thing..."
                className="h-14 text-lg font-black rounded-2xl border-2"
              />
            </div>

            <div className="space-y-2">
              <div className="flex justify-between items-center ml-1">
                <label className="text-[10px] font-black uppercase opacity-60">{t('lbl_desc')}</label>
                <Button 
                  variant="ghost" 
                  size="sm" 
                  onClick={handleVoiceDictation}
                  className={cn(
                    "h-8 text-[9px] font-black uppercase rounded-full border-2",
                    isListening ? "bg-red-100 text-red-600 animate-pulse border-red-200" : "hover:bg-primary/5"
                  )}
                >
                  {isListening ? <MicOff className="h-3.5 w-3.5 mr-1" /> : <Mic className="h-3.5 w-3.5 mr-1" />}
                  {isListening ? t('voice_start') : 'Voice Dictation'}
                </Button>
              </div>
              <Textarea 
                value={formData.description}
                onChange={(e) => setFormData({...formData, description: e.target.value})}
                placeholder="Explain the vision, goals, and logic..."
                className="min-h-[150px] text-sm font-medium rounded-2xl border-2 p-4 leading-relaxed"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase opacity-60 ml-1">{t('lbl_priority')}</label>
                <Select value={formData.priority} onValueChange={(val: any) => setFormData({...formData, priority: val})}>
                  <SelectTrigger className="h-14 rounded-2xl border-2 font-bold uppercase text-xs">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="High">🔴 High Priority</SelectItem>
                    <SelectItem value="Medium">🟠 Medium Priority</SelectItem>
                    <SelectItem value="Low">🔵 Low Priority</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase opacity-60 ml-1">{t('lbl_status')}</label>
                <Select value={formData.status} onValueChange={(val: any) => setFormData({...formData, status: val})}>
                  <SelectTrigger className="h-14 rounded-2xl border-2 font-bold uppercase text-xs">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Idea">💡 Idea Stage</SelectItem>
                    <SelectItem value="In Progress">🚧 In Progress</SelectItem>
                    <SelectItem value="Done">✅ Done / Executed</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-[10px] font-black uppercase opacity-60 ml-1">{t('lbl_tags')}</label>
              <div className="relative">
                <Tag className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input 
                  value={formData.tags}
                  onChange={(e) => setFormData({...formData, tags: e.target.value})}
                  placeholder="tech, sport, viral, mobile..."
                  className="pl-12 h-14 rounded-2xl border-2 font-medium"
                />
              </div>
            </div>
          </div>

          <DialogFooter className="gap-2 sm:gap-0 mt-4">
            <Button variant="ghost" onClick={closeForm} className="h-14 px-8 font-black uppercase tracking-widest text-xs rounded-2xl">
              {t('cancel')}
            </Button>
            <Button onClick={handleAddEdit} className="h-14 px-10 bg-primary hover:bg-primary/90 text-white font-black uppercase tracking-widest text-xs rounded-2xl shadow-xl flex-1">
              <CheckCircle2 className="mr-2 h-5 w-5" /> {t('save')}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      <ArticleSection toolId="idea-tracker" />
      <SmartAd />
    </div>
  );
}
