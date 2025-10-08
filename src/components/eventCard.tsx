"use client"
import React, { useState } from 'react';
import { 
  Card, 
  CardContent, 
  CardMedia, 
  Typography, 
  Chip, 
  Box, 
  Button,
  Grid,
  Container
} from '@mui/material';
import { 
  CalendarToday, 
  LocationOn, 
  OpenInNew 
} from '@mui/icons-material';

import { Event } from '../app/types';

import professionalImg from '@/../public/event_cover_images/professional.jpg'
import academicImg from '@/../public/event_cover_images/academic.jpg'
import weceImg from '@/../public/event_cover_images/wece.jpg'
import socialImg from '@/../public/event_cover_images/social.jpg'
import mentorshipImg from '@/../public/event_cover_images/mentorship.jpg'

const EventCard = ({ event }: { event: Event }) => {
  const [isHovered, setIsHovered] = useState(false);

  const tagColors = {
    professional: '#2196F3',
    academic: '#9C27B0',
    wece: '#E91E63',
    social: '#4CAF50',
    mentorship: '#FF9800',
  };

  const coverImages2 = {
    professional: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=400&fit=crop',
    academic: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&h=400&fit=crop',
    wece: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&h=400&fit=crop',
    social: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=800&h=400&fit=crop',
    mentorship: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=400&fit=crop',
  };

  const coverImages = {
    professional: professionalImg.src,
    academic: academicImg.src,
    wece: weceImg.src,
    social: socialImg.src,
    mentorship: mentorshipImg.src,
  };

  return (
    <Card
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      sx={{
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
        transform: isHovered ? 'scale(1.05)' : 'scale(1)',
        zIndex: isHovered ? 10 : 1,
        boxShadow: isHovered ? 12 : 2,
        cursor: 'pointer',
        bgcolor: '#1a1a1a',
        color: 'white',
        position: 'relative',
        borderRadius: 5,
      }}
    >
      <Box sx={{ position: 'relative' }}>
        <CardMedia
          component="img"
          height="200"
          image={coverImages[event.tag]}
          alt={event.title}
          sx={{
            objectFit: 'cover',
          }}
        />
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0.8) 100%)',
          }}
        />
        <Chip
          label={event.tag.toUpperCase()}
          size="small"
          sx={{
            position: 'absolute',
            top: 12,
            right: 12,
            bgcolor: tagColors[event.tag],
            color: 'white',
            fontWeight: 'bold',
            fontSize: '0.7rem',
          }}
        />
      </Box>

      <CardContent sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
        <Typography 
          variant="h6" 
          component="h3" 
          gutterBottom
          sx={{
            fontWeight: 'bold',
            display: '-webkit-box',
            WebkitLineClamp: 2,
            WebkitBoxOrient: 'vertical',
            overflow: 'hidden',
            mb: 2,
          }}
        >
          {event.title}
        </Typography>

        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1.5 }}>
          <CalendarToday sx={{ fontSize: 16, color: 'rgba(255,255,255,0.7)' }} />
          <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.7)' }}>
            {event.date} • {event.time}
          </Typography>
        </Box>

        <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 1, mb: 2 }}>
          <LocationOn sx={{ fontSize: 16, color: 'rgba(255,255,255,0.7)', mt: 0.2 }} />
          <Typography 
            variant="body2" 
            sx={{ 
              color: 'rgba(255,255,255,0.7)',
              display: '-webkit-box',
              WebkitLineClamp: 2,
              WebkitBoxOrient: 'vertical',
              overflow: 'hidden',
            }}
          >
            {event.location}
          </Typography>
        </Box>

        <Box
          sx={{
            maxHeight: isHovered ? 200 : 0,
            opacity: isHovered ? 1 : 0,
            overflow: 'hidden',
            transition: 'all 0.3s ease',
          }}
        >
          <Typography 
            variant="body2" 
            sx={{ 
              color: 'rgba(255,255,255,0.6)',
              mb: 2,
              display: '-webkit-box',
              WebkitLineClamp: 3,
              WebkitBoxOrient: 'vertical',
              overflow: 'hidden',
            }}
          >
            {event.information}
          </Typography>

          <Button
            variant="contained"
            endIcon={<OpenInNew />}
            href={event.rsvpLink}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            sx={{
              bgcolor: '#8B5CF6',
                '&:hover': {
                    bgcolor: '#7C3AED',
                },
              fontWeight: 'bold',
              textTransform: 'none',
              borderRadius: 3
            }}
          >
            RSVP Now
          </Button>
        </Box>
      </CardContent>
    </Card>
  );
};

// Demo Component
const EventsGrid = ({eventsList} : {eventsList : Event[]}) => {
  

  return (
    <Box sx={{ 
      minHeight: '100vh', 
      background: 'linear-gradient(to bottom, #0f172a, #1e293b)',
      py: 6,
    }}>
      <Container maxWidth="xl">
        <Typography 
          variant="h3" 
          component="h1" 
          gutterBottom 
          sx={{ 
            color: 'white', 
            fontWeight: 'bold',
            mb: 4,
          }}
        >
          Upcoming Events
        </Typography>
        
        <Grid container spacing={4}>
          {eventsList.map((event, idx) => (
            <Grid size = {{xs:12,sm:6, md:4}} key={idx} >
              <EventCard event={event} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default EventsGrid;