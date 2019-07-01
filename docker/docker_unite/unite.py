import socket 
import calendar
import os
import time
import random
import json 

def get_rand_hexa(liste):
    index = random.randrange(0, len(liste), 1)
    elem = liste[index]
    liste.pop(index)
    return elem


numUnite = (socket.gethostname())[0]

types = [1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F']
liste_type_automt = [[1, get_rand_hexa(types)], [2, get_rand_hexa(types)], [3, get_rand_hexa(types)], [4, get_rand_hexa(types)], [5, get_rand_hexa(types)], [6, get_rand_hexa(types)], [7, get_rand_hexa(types)], [8, get_rand_hexa(types)], [9, get_rand_hexa(types)], [10, get_rand_hexa(types)]]

data = {}

date = calendar.timegm(time.gmtime()) 

format_date = time.strftime('%Y-%m-%d %H:%M:%S', time.localtime(date))

f = "paramunite_"+str(numUnite)+"_"+str(date)+".json"

#Création du json
with open(f, "w+") as outfile:
    array = []
    for element in liste_type_automt:
        data={
                    'numUnite': numUnite,
                    'numAutomate': element[0], 
                    'typeAutomate': '0X000BA2'+str(element[1]),
                    'temperature_cuve': round(random.uniform(2.5,4.0), 1),
                    'temperature_exterieure': round(random.uniform(8.0,14.0), 1),
                    'poid_lait_cuve': random.randrange(3512,4607,1),
                    'mesure_ph': round(random.uniform(6.8,7.2), 1),            
                    'mesure_k': random.randrange(35,47,1),            
                    'concentration_NaCl': round(random.uniform(1.0,1.7), 1),            
                    'niv_bacterien_salmonelle': random.randrange(17,37,1),            
                    'niv_bacterien_Ecoli': random.randrange(35,49,1),            
                    'niv_bacterien_listeria': random.randrange(28,54,1),
                    'date' : format_date
            },
        array.append(data)

    json.dump(array, outfile,indent=1)


#Partie envoi de donnees
#Connexion 
s = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
s.connect(("172.30.0.10", 1111)) 
file = f  
#Envoi
with open(file, 'rb') as _file: 
    s.send(_file.read()) 

print("Le fichier a ete correctement ete envoye au serveur : %s." % file) 

s.recv(2048)

