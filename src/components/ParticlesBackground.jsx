import React, { useEffect, useRef } from 'react'

const ParticlesBackground = () => {
  const canvasRef = useRef(null)
  const particlesRef = useRef([])
  const animationRef = useRef(null)
  const mouseRef = useRef({ x: 0, y: 0 })
  const burstRef = useRef([])

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    
    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    
    resizeCanvas()
    window.addEventListener('resize', resizeCanvas)

    // Particle class
    class Particle {
      constructor(x, y) {
        this.x = x
        this.y = y
        this.vx = (Math.random() - 0.5) * 0.5
        this.vy = (Math.random() - 0.5) * 0.5
        this.size = Math.random() * 2 + 1
        this.opacity = Math.random() * 0.5 + 0.3
        this.connections = []
        this.color = `hsl(${Math.random() * 60 + 240}, 70%, 60%)`
      }

      update() {
        this.x += this.vx
        this.y += this.vy

        // Bounce off edges
        if (this.x <= 0 || this.x >= canvas.width) this.vx *= -1
        if (this.y <= 0 || this.y >= canvas.height) this.vy *= -1

        // Keep particles in bounds
        this.x = Math.max(0, Math.min(canvas.width, this.x))
        this.y = Math.max(0, Math.min(canvas.height, this.y))
      }

      draw() {
        ctx.save()
        ctx.globalAlpha = this.opacity
        ctx.fillStyle = this.color
        ctx.shadowColor = this.color
        ctx.shadowBlur = 10
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
        ctx.fill()
        ctx.restore()
      }
    }

    // Burst effect class
    class Burst {
      constructor(x, y) {
        this.x = x
        this.y = y
        this.particles = []
        this.life = 1
        this.decay = 0.02
        
        // Create burst particles
        for (let i = 0; i < 8; i++) {
          const angle = (Math.PI * 2 * i) / 8
          const speed = Math.random() * 3 + 2
          this.particles.push({
            x: x,
            y: y,
            vx: Math.cos(angle) * speed,
            vy: Math.sin(angle) * speed,
            life: 1,
            size: Math.random() * 3 + 2,
            color: `hsl(${Math.random() * 60 + 240}, 70%, 60%)`
          })
        }
      }

      update() {
        this.life -= this.decay
        
        this.particles.forEach(particle => {
          particle.x += particle.vx
          particle.y += particle.vy
          particle.life -= this.decay
          particle.vx *= 0.98
          particle.vy *= 0.98
        })

        this.particles = this.particles.filter(particle => particle.life > 0)
      }

      draw() {
        this.particles.forEach(particle => {
          ctx.save()
          ctx.globalAlpha = particle.life
          ctx.fillStyle = particle.color
          ctx.shadowColor = particle.color
          ctx.shadowBlur = 15
          ctx.beginPath()
          ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2)
          ctx.fill()
          ctx.restore()
        })
      }
    }

    // Initialize particles
    const initParticles = () => {
      particlesRef.current = []
      const particleCount = Math.min(100, Math.floor((canvas.width * canvas.height) / 10000))
      
      for (let i = 0; i < particleCount; i++) {
        particlesRef.current.push(
          new Particle(
            Math.random() * canvas.width,
            Math.random() * canvas.height
          )
        )
      }
    }

    // Draw connections between nearby particles
    const drawConnections = () => {
      const maxDistance = 150
      
      for (let i = 0; i < particlesRef.current.length; i++) {
        for (let j = i + 1; j < particlesRef.current.length; j++) {
          const dx = particlesRef.current[i].x - particlesRef.current[j].x
          const dy = particlesRef.current[i].y - particlesRef.current[j].y
          const distance = Math.sqrt(dx * dx + dy * dy)
          
          if (distance < maxDistance) {
            const opacity = (maxDistance - distance) / maxDistance * 0.3
            ctx.save()
            ctx.strokeStyle = `rgba(147, 51, 234, ${opacity})`
            ctx.lineWidth = 1
            ctx.shadowColor = 'rgba(147, 51, 234, 0.5)'
            ctx.shadowBlur = 5
            ctx.beginPath()
            ctx.moveTo(particlesRef.current[i].x, particlesRef.current[i].y)
            ctx.lineTo(particlesRef.current[j].x, particlesRef.current[j].y)
            ctx.stroke()
            ctx.restore()
          }
        }
      }
    }

    // Mouse interaction
    const handleMouseMove = (e) => {
      mouseRef.current.x = e.clientX
      mouseRef.current.y = e.clientY
      
      // Create burst effect on mouse movement
      if (Math.random() < 0.1) {
        burstRef.current.push(new Burst(e.clientX, e.clientY))
      }
    }

    const handleClick = (e) => {
      // Create larger burst on click
      burstRef.current.push(new Burst(e.clientX, e.clientY))
    }

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      
      // Update and draw particles
      particlesRef.current.forEach(particle => {
        particle.update()
        particle.draw()
      })
      
      // Draw connections
      drawConnections()
      
      // Update and draw bursts
      burstRef.current.forEach((burst, index) => {
        burst.update()
        burst.draw()
        
        if (burst.life <= 0) {
          burstRef.current.splice(index, 1)
        }
      })
      
      // Add subtle cosmic glow
      ctx.save()
      ctx.globalCompositeOperation = 'screen'
      ctx.fillStyle = 'rgba(147, 51, 234, 0.05)'
      ctx.fillRect(0, 0, canvas.width, canvas.height)
      ctx.restore()
      
      animationRef.current = requestAnimationFrame(animate)
    }

    // Initialize and start animation
    initParticles()
    animate()

    // Event listeners
    canvas.addEventListener('mousemove', handleMouseMove)
    canvas.addEventListener('click', handleClick)

    // Cleanup
    return () => {
      window.removeEventListener('resize', resizeCanvas)
      canvas.removeEventListener('mousemove', handleMouseMove)
      canvas.removeEventListener('click', handleClick)
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="particle-container"
      style={{
        background: 'transparent',
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: 0,
        pointerEvents: 'none'
      }}
    />
  )
}

export default ParticlesBackground
