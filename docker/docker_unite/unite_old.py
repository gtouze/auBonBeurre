from random import uniform
from random import randrange
import calendar
import time
import mysql.connector
import json


database = mysql.connector.connect(host="localhost",user="root",password="admin",database="aubonbeurre_db")

cursor = database.cursor()

cursor.execute("""SELECT numUnite,numAutomate,typeAutomate FROM unite_1""")
rows = cursor.fetchall()

i = -1
data = {}

date = calendar.timegm(time.gmtime())
format_date = time.strftime('%Y-%m-%d %H:%M:%S', time.localtime(date))


fichier = "./log_automate/paramunite_1_"+str(date)+".json"


with open(fichier, "w+") as outfile:
    array = []
    for row in rows:
        data={
                    'id_unite': row[0],
                    'numero_automate': row[1],
                    'type_automate': row[2],
                    'temp_cuve': round(uniform(2.5,4.0), 1),
                    'temp_exterieur': round(uniform(8.0,14.0), 1),
                    'poids_lait_cuve': randrange(3512,4607,1),
                    'mesure_ph': round(uniform(6.8,7.2), 1),
                    'mesure_k': randrange(35,47,1),
                    'concent_nacl': round(uniform(1.0,1.7), 1),
                    'niveau_bact_salmo': randrange(17,37,1),
                    'niveau_bact_ecoli': randrange(35,49,1),
                    'niveau_bact_listeria': randrange(28,54,1),
                    'date' : format_date
            },
        array.append(data)

    json.dump(array, outfile,indent=1)
