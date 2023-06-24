import Button from '../../components/Button'

export default function Page() {
  return (
    <div
      style={{
        height: '100vh',
        width: '100vw',
        zIndex: '9999',
        position: 'fixed',
        background: '#000',
        color: '#FFF',
        textAlign: 'center',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Button variant="specialSecondary" size="large">
        Edge
      </Button>
    </div>
  )
}

export const runtime = 'edge'
