import pygame, sys
from pygame.locals import*
pygame.init()

screen = pygame.display.set_mode((400, 300))
pygame.display.set_caption("Escape!")
screen.fill((255,0,0))


while True:
    for event in pygame.event.get():
        if event.type == QUIT:
            pygame.quit()
            sys.exit(1)
       
