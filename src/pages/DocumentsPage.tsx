import React from 'react';
import { UploadZone } from '../components/feature/UploadZone';

export const DocumentsPage: React.FC = () => {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-xl font-semibold text-slate-900 dark:text-slate-50">Documents & OCR</h1>
        <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
          Upload bank statements, payslips and investment proofs. We’ll extract key data for analysis.
        </p>
      </div>
      <UploadZone />
    </div>
  );
};


