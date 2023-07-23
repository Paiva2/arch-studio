import { motion } from "framer-motion"
import "./styles.css"

interface Props {
  children: React.ReactNode
}

function FadeComponent({ children }: Props) {
  return (
    <motion.div
      className="fadeContainer"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration: 0.3, delay: 0.3 }}
      variants={{
        visible: { opacity: 1 },
        hidden: { opacity: 0 },
      }}
    >
      {children}
    </motion.div>
  )
}

export default FadeComponent
