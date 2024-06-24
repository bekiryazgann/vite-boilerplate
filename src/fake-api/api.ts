import {http, HttpResponse} from 'msw'
import {setupWorker} from 'msw/browser'
import {fakerTR} from "@faker-js/faker";


const msw = setupWorker(
    http.get("https://api.eskizpsd.com/v2/todos", () => {
        const data: object[] = [];

        for(let i: number = 0; i < 20; i += 1){
            data.push({
                userId: fakerTR.number.int(),
                id: fakerTR.number.int(),
                title: fakerTR.word.words(20),
                completed: Math.round((Math.random()*100 * 100))  % 2 == 0,
                date: fakerTR.date.birthdate()
            })
        }

        return HttpResponse.json(data)
    }),
)

await msw.start()
