import React, { DragEvent, useState } from 'react';
import { Card } from '../ui/Card';
import { Button } from '../ui/Button';

interface UploadedDoc {
  id: string;
  name: string;
  sizeKb: number;
  uploadedAt: string;
}

export const UploadZone: React.FC = () => {
  const [isDragging, setIsDragging] = useState(false);
  const [docs, setDocs] = useState<UploadedDoc[]>([]);
  const [extractedPreview, setExtractedPreview] = useState<string | null>(null);

  const handleFiles = (files: FileList | null) => {
    if (!files || files.length === 0) return;
    const now = new Date().toISOString();
    const newDocs: UploadedDoc[] = Array.from(files).map((file) => ({
      id: `${file.name}-${now}`,
      name: file.name,
      sizeKb: Math.round(file.size / 1024),
      uploadedAt: now,
    }));
    setDocs((prev) => [...newDocs, ...prev]);
    setExtractedPreview(
      'Mock OCR: Detected a transaction of ₹3,250 at "SuperMart" on 10 Feb 2026 and a payment of ₹1,200 towards Electricity Bill.',
    );
  };

  const onDrop = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
    handleFiles(e.dataTransfer.files);
  };

  const onDragOver = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    if (!isDragging) setIsDragging(true);
  };

  const onDragLeave = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
  };

  return (
    <Card
      title="Upload financial documents"
      subtitle="Bank statements, salary slips, investment proofs — we’ll extract key data automatically."
    >
      <div className="space-y-4">
        <div
          className={`flex flex-col items-center justify-center rounded-2xl border-2 border-dashed px-6 py-10 text-center text-sm transition ${
            isDragging
              ? 'border-primary bg-primary-soft/60 text-primary'
              : 'border-slate-300 bg-slate-50/80 text-slate-500 dark:border-slate-700 dark:bg-slate-900/40 dark:text-slate-400'
          }`}
          onDrop={onDrop}
          onDragOver={onDragOver}
          onDragLeave={onDragLeave}
        >
          <p className="mb-1 font-medium">Drag & drop files here</p>
          <p className="mb-3 text-xs text-slate-500 dark:text-slate-400">
            PDF, JPEG, PNG up to 10MB each. Your data is processed securely.
          </p>
          <label className="inline-flex cursor-pointer items-center justify-center rounded-full bg-white px-4 py-1.5 text-xs font-medium text-primary shadow-sm ring-1 ring-primary/20 hover:bg-primary-soft dark:bg-slate-900 dark:text-blue-300">
            <span>Browse files</span>
            <input
              type="file"
              className="hidden"
              multiple
              onChange={(e) => handleFiles(e.target.files)}
              accept=".pdf,.jpg,.jpeg,.png"
            />
          </label>
        </div>

        <div className="grid gap-4 lg:grid-cols-2">
          <div className="space-y-2">
            <div className="flex items-center justify-between text-xs font-medium text-slate-600 dark:text-slate-300">
              <span>Uploaded documents</span>
              {docs.length > 0 && <span className="text-slate-400">{docs.length} files</span>}
            </div>
            {docs.length === 0 ? (
              <p className="rounded-xl border border-dashed border-slate-200 bg-slate-50/70 px-3 py-4 text-xs text-slate-500 dark:border-slate-800 dark:bg-slate-900/40 dark:text-slate-400">
                No documents uploaded yet. Start by uploading your latest bank statement.
              </p>
            ) : (
              <ul className="scroll-thin max-h-48 space-y-2 overflow-y-auto text-xs">
                {docs.map((doc) => (
                  <li
                    key={doc.id}
                    className="flex items-center justify-between rounded-xl bg-white px-3 py-2 shadow-sm ring-1 ring-slate-100 dark:bg-slate-950 dark:ring-slate-800"
                  >
                    <div>
                      <p className="font-medium text-slate-700 dark:text-slate-100">{doc.name}</p>
                      <p className="text-[11px] text-slate-500">
                        {doc.sizeKb} KB • {new Date(doc.uploadedAt).toLocaleString()}
                      </p>
                    </div>
                    <Button type="button" variant="ghost" className="px-2 py-1 text-[11px]">
                      View data
                    </Button>
                  </li>
                ))}
              </ul>
            )}
          </div>

          <div className="space-y-2">
            <div className="flex items-center justify-between text-xs font-medium text-slate-600 dark:text-slate-300">
              <span>Extracted data preview</span>
            </div>
            {extractedPreview ? (
              <div className="rounded-xl border border-emerald-200 bg-emerald-50/80 px-3 py-3 text-xs text-emerald-900 shadow-sm dark:border-emerald-900/60 dark:bg-emerald-950/60 dark:text-emerald-100">
                {extractedPreview}
              </div>
            ) : (
              <p className="rounded-xl border border-dashed border-slate-200 bg-slate-50/70 px-3 py-4 text-xs text-slate-500 dark:border-slate-800 dark:bg-slate-900/40 dark:text-slate-400">
                Once you upload a document, we’ll show a summarized view of detected transactions and key values here.
              </p>
            )}
          </div>
        </div>
      </div>
    </Card>
  );
};


