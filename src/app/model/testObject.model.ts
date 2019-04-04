export class TestObject {

    id: string;
    name: string;
    date: Date;
    checker: string[];
    radier: string;
    selector: string;
    mail: string;


    constructor(id?, name?, date?, checker?, radier?, selector?, mail?) {

        this.id = id;
        this.name = name;
        this.date = date;
        this.checker = checker;
        this.radier = radier;
        this.selector = selector;
        this.mail = mail;
    }

    setId(id): void {
        this.id = id;
    }
    setName(pName): void {
        this.name = pName;
    }
    setDate(date): void {
        this.date = date;
    }
    setChecker(checker): void {
        this.checker = checker;
    }
    setRadier(radier): void {
        this.radier = radier;
    }
    setSelector(selector): void {
        this.selector = selector;
    }
    setMail(mail): void {
        this.mail = mail;
    }

    getId(): string {
        return this.id;
    }
    getName(): string {
        return this.name;
    }
    getDate(): Date {
        return this.date;
    }
    getChecker(): string[] {
        return this.checker;
    }
    getRadier(): string {
        return this.radier;
    }
    getSelector(): string {
        return this.selector;
    }
    getMail(): string {
        return this.mail;
    }
}
