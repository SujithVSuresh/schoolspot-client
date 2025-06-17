import { NProgress } from '@tanem/react-nprogress';

export default function CustomProgress({ isAnimating }: { isAnimating: boolean }) {
  return (
    <NProgress isAnimating={isAnimating}>
      {({ isFinished, progress, animationDuration }) => (
        <div
          style={{
            height: 4,
            width: '100%',
            position: 'relative', // instead of fixed
            opacity: isFinished ? 0 : 1,
            transition: `opacity ${animationDuration}ms linear`,
          }}
        >
          <div
            style={{
              height: '100%',
              background: '#4f46e5',
              transform: `translate3d(${(-1 + progress) * 100}%, 0, 0)`,
              transition: `transform ${animationDuration}ms linear`,
              width: '100%',
              position: 'absolute',
              top: 0,
              left: 0,
            }}
          />
        </div>
      )}
    </NProgress>
  );
}
