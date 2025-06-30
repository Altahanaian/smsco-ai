export default function SimpleRequestForm() {
  return (
    <div
      style={{
        padding: '4rem 2rem',
        maxWidth: '600px',
        margin: 'auto',
        textAlign: 'center',
      }}
    >
      <h1 style={{ fontSize: '2.5rem', color: '#4a148c' }}>
        Request a Service
      </h1>
      <form
        action="https://formspree.io/f/meokrkyj"
        method="POST"
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '1rem',
          marginTop: '2rem',
        }}
      >
        <label style={{ textAlign: 'left' }}>
          Your email:
          <input
            type="email"
            name="email"
            required
            style={{
              width: '100%',
              padding: '0.75rem',
              fontSize: '1rem',
              marginTop: '0.5rem',
            }}
          />
        </label>
        <label style={{ textAlign: 'left' }}>
          Your message:
          <textarea
            name="message"
            required
            rows={5}
            style={{
              width: '100%',
              padding: '0.75rem',
              fontSize: '1rem',
              marginTop: '0.5rem',
            }}
          />
        </label>
        <button
          type="submit"
          style={{
            padding: '0.75rem',
            backgroundColor: '#6a1b9a',
            color: '#fff',
            fontSize: '1rem',
            border: 'none',
            borderRadius: '6px',
          }}
        >
          Send
        </button>
      </form>
    </div>
  );
}
