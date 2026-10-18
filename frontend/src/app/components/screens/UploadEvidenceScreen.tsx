import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Upload, Image, Video, X, Check } from 'lucide-react';
import { Button } from '../ui/button';
import { Textarea } from '../ui/textarea';
import { Label } from '../ui/label';

export function UploadEvidenceScreen() {
  const navigate = useNavigate();
  const [files, setFiles] = useState<string[]>([]);
  const [observation, setObservation] = useState('');
  const [uploading, setUploading] = useState(false);
  const [uploaded, setUploaded] = useState(false);

  const handleAddFile = () => {
    if (files.length < 5) {
      setFiles([...files, `Evidência ${files.length + 1}`]);
    }
  };

  const handleRemoveFile = (index: number) => {
    setFiles(files.filter((_, i) => i !== index));
  };

  const handleSubmit = () => {
    setUploading(true);
    setTimeout(() => {
      setUploading(false);
      setUploaded(true);
      setTimeout(() => {
        navigate('/home');
      }, 1500);
    }, 2000);
  };

  return (
    <div className="h-full bg-white flex flex-col">
      {/* Header */}
      <div className="bg-gradient-to-br from-[#1B5E3F] to-[#2C5F6F] pt-16 pb-6 px-6">
        <button
          onClick={() => navigate('/new-occurrence')}
          className="text-white mb-4 flex items-center gap-2"
        >
          <ArrowLeft className="w-5 h-5" />
          Voltar
        </button>
        <h1 className="text-2xl font-bold text-white">Enviar Evidências</h1>
        <p className="text-white/80 text-sm mt-1">
          Adicione fotos e vídeos do local
        </p>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-auto px-6 py-6 pb-24">
        {/* Upload Area */}
        <div className="mb-6">
          <Label className="text-gray-700 mb-3 block">
            Arquivos ({files.length}/5)
          </Label>
          
          {files.length > 0 && (
            <div className="grid grid-cols-2 gap-3 mb-4">
              {files.map((file, index) => (
                <div
                  key={index}
                  className="relative aspect-square bg-gray-100 rounded-xl overflow-hidden border-2 border-gray-200"
                >
                  <div className="absolute inset-0 flex items-center justify-center">
                    {index % 2 === 0 ? (
                      <Image className="w-12 h-12 text-gray-400" />
                    ) : (
                      <Video className="w-12 h-12 text-gray-400" />
                    )}
                  </div>
                  <button
                    onClick={() => handleRemoveFile(index)}
                    className="absolute top-2 right-2 w-6 h-6 bg-red-500 rounded-full flex items-center justify-center"
                  >
                    <X className="w-4 h-4 text-white" />
                  </button>
                  <div className="absolute bottom-0 left-0 right-0 bg-black/50 text-white text-xs p-2">
                    {file}
                  </div>
                </div>
              ))}
            </div>
          )}

          {files.length < 5 && (
            <button
              onClick={handleAddFile}
              className="w-full border-2 border-dashed border-gray-300 rounded-xl p-8 hover:border-[#1B5E3F] hover:bg-[#1B5E3F]/5 transition-colors"
            >
              <Upload className="w-12 h-12 text-gray-400 mx-auto mb-3" />
              <p className="text-sm text-gray-600 font-medium mb-1">
                Adicionar Foto ou Vídeo
              </p>
              <p className="text-xs text-gray-500">
                Toque para selecionar da galeria ou câmera
              </p>
            </button>
          )}
        </div>

        {/* Observation */}
        <div className="space-y-2 mb-6">
          <Label htmlFor="observation" className="text-gray-700">
            Observação Complementar (Opcional)
          </Label>
          <Textarea
            id="observation"
            placeholder="Adicione informações extras sobre as evidências..."
            value={observation}
            onChange={(e) => setObservation(e.target.value)}
            className="min-h-24 bg-gray-50 border-gray-200 resize-none"
          />
        </div>

        {/* Success State */}
        {uploaded && (
          <div className="bg-green-50 border border-green-200 rounded-xl p-6 mb-6 text-center">
            <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <Check className="w-8 h-8 text-white" strokeWidth={3} />
            </div>
            <h3 className="text-lg font-semibold text-green-900 mb-2">
              Ocorrência Registrada!
            </h3>
            <p className="text-sm text-green-700">
              Protocolo ECO-2024-003 gerado com sucesso
            </p>
          </div>
        )}

        {/* Submit Button */}
        <Button
          onClick={handleSubmit}
          disabled={uploading || uploaded}
          className="w-full bg-[#1B5E3F] hover:bg-[#1B5E3F]/90 h-12"
        >
          {uploading ? (
            <>
              <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
              Enviando...
            </>
          ) : uploaded ? (
            <>
              <Check className="w-5 h-5 mr-2" />
              Enviado!
            </>
          ) : (
            'Enviar Ocorrência'
          )}
        </Button>

        <p className="text-xs text-gray-500 text-center mt-4">
          Você receberá atualizações sobre o andamento do seu caso
        </p>
      </div>
    </div>
  );
}
