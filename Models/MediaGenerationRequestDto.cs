namespace SelfAiFrontEndTasarımı.Models
{
    public class MediaGenerationRequestDto
    {
        // 1. KULLANICININ YÜKLEDİĞİ DOSYA
        public IFormFile AssetFile { get; set; }

        // 2. GÖRSEL OLUŞTURMA PARAMETRELERİ
        public string AspectRatio { get; set; }
        public int BatchSize { get; set; }
        public double CfgScale { get; set; }
        public string Model { get; set; }
        public string Style { get; set; }
        public int Steps { get; set; }
        public int Seed { get; set; }
        public string Quality { get; set; }
        public string Sampler { get; set; }

        // Prompt alanları
        public string PositivePrompt { get; set; }
        public string NegativePrompt { get; set; }
    }
}
