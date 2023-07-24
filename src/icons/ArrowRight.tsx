const ArrowRight = ({ color = "#fff" }: { color?: string }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="20"
      viewBox="0 0 24 20"
      fill="none"
    >
      <path d="M15 1L24 10L15 19" stroke={color} strokeWidth="2" />
      <path d="M0 10H24" stroke={color} strokeWidth="2" />
    </svg>
  )
}

export default ArrowRight
