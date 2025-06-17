import { NProgress } from '@tanem/react-nprogress';

export default function CustomProgress({ isAnimating }: { isAnimating: boolean }) {
  return (
    <NProgress isAnimating={isAnimating}>
      {({ isFinished, progress, animationDuration }) => (
        <div
          style={{
            height: 4,
            width: '100%',
            position: 'relative',
            opacity: isFinished ? 0 : 1,
            transition: `opacity ${animationDuration}ms linear`,
          }}
        >
          <div
            style={{
              height: '100%',
              background: '#0D0D0D',
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
