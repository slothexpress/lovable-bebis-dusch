import { useEffect, useState } from "react";

interface ConfettiPiece {
  id: number;
  left: number;
  delay: number;
  duration: number;
  color: string;
  size: number;
  type: 'circle' | 'square' | 'star';
}

const Confetti = () => {
  const [pieces, setPieces] = useState<ConfettiPiece[]>([]);

  useEffect(() => {
    const colors = [
      'hsl(155, 65%, 60%)',  // mint
      'hsl(160, 55%, 70%)',  // light mint
      'hsl(145, 50%, 65%)',  // sage light
      'hsl(85, 55%, 65%)',   // lime
      'hsl(50, 70%, 75%)',   // soft yellow
      'hsl(330, 60%, 75%)',  // soft pink
    ];

    const types: ('circle' | 'square' | 'star')[] = ['circle', 'square', 'star'];

    const newPieces: ConfettiPiece[] = Array.from({ length: 50 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      delay: Math.random() * 5,
      duration: 3 + Math.random() * 4,
      color: colors[Math.floor(Math.random() * colors.length)],
      size: 6 + Math.random() * 10,
      type: types[Math.floor(Math.random() * types.length)],
    }));

    setPieces(newPieces);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {pieces.map((piece) => (
        <div
          key={piece.id}
          className="absolute animate-confetti-fall"
          style={{
            left: `${piece.left}%`,
            animationDelay: `${piece.delay}s`,
            animationDuration: `${piece.duration}s`,
          }}
        >
          {piece.type === 'circle' && (
            <div
              className="rounded-full"
              style={{
                width: piece.size,
                height: piece.size,
                backgroundColor: piece.color,
              }}
            />
          )}
          {piece.type === 'square' && (
            <div
              className="rotate-45"
              style={{
                width: piece.size,
                height: piece.size,
                backgroundColor: piece.color,
              }}
            />
          )}
          {piece.type === 'star' && (
            <div
              style={{
                fontSize: piece.size,
                color: piece.color,
              }}
            >
              ✦
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Confetti;
