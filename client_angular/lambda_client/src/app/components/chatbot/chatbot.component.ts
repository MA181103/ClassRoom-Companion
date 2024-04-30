import { Component, ElementRef, ViewChild, HostListener } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http'; // <-- Import HttpClientModule

@Component({
  selector: 'app-chatbot',
  templateUrl: './chatbot.component.html',
  styleUrls: ['./chatbot.component.scss']
})
export class ChatbotComponent {

  isShowDivIf = false;
  checked : boolean = false;

  toggleDisplayDivIf() {
    console.log("hello")
    this.isShowDivIf = !this.isShowDivIf;
  }
  bot: string = 'assets/bot.svg';
  user: string = 'assets/user.svg';
  @ViewChild('formRef', { static: false }) formRef!: ElementRef<HTMLFormElement> | null;
  @ViewChild('chatContainer', { static: false }) chatContainerRef!: ElementRef<HTMLDivElement> | null;

  private form: HTMLFormElement | null;
  private chatContainer: HTMLElement | null;

  loadInterval: any;


  constructor(private http: HttpClient) {
    this.http.get('assets/bot.svg', { responseType: 'text' }).subscribe(svg => {
      this.bot = `data:image/svg+xml;base64,${btoa(svg)}`;
    });
    this.http.get('assets/user.svg', { responseType: 'text' }).subscribe(svg => {
      this.user = `data:image/svg+xml;base64,${btoa(svg)}`;
    });
    this.loadInterval = 0;
  }

  ngAfterViewInit() {
    this.form = this.formRef.nativeElement;
    this.chatContainer = this.chatContainerRef.nativeElement;
    this.form.addEventListener('submit', this.handleSubmit.bind(this));
    this.form.addEventListener('keyup', (e) => {
      if (e.keyCode === 13) {
        this.handleSubmit(e);
      }
    });
  }
  private loader(element: HTMLElement) {
    element.textContent = '';

    this.loadInterval = setInterval(() => {
      element.textContent += '.';

      if (element.textContent === '....') {
        element.textContent = '';
      }
    }, 300);
  }

  private typeText(element: HTMLElement, text: string) {
    let index = 0;

    let interval = setInterval(() => {
      if (index < text.length) {
        element.innerHTML += text.charAt(index);
        index++;
      } else {
        clearInterval(interval);
      }
    }, 20);
  }

  private generateUniqueId() {
    const timestamp = Date.now();
    const randomNumber = Math.random();
    const hexadecimalString = randomNumber.toString(16);

    return `id-${timestamp}-${hexadecimalString}`;
  }

  private chatStripe(isAi: boolean, value: string, uniqueId?: string) {

    return (
      `
      <div class="wrapper ${isAi && 'ai'}">
        <div class="chat">
          <div class="profile">
            <img
              src=${isAi ? this.bot : this.user}
              alt="${isAi ? 'bot' : 'user'}"
            />
          </div>

          <mat-card class="example-card">
            <mat-card-header>
              <div mat-card-avatar class="example-header-image"></div>
            </mat-card-header>
            <mat-card-content>
              <div class="message" style="padding: 20px;white-space:pre-wrap;border-radius: 10px; background-color: #dedede;" id=${uniqueId}>${value}</div>
            </mat-card-content>
          </mat-card>
        </div>
      </div>
    `
    );
  }

  async handleSubmit(e: Event) {
    e.preventDefault();

    const data = new FormData(this.form);
    const uniqueId2 = this.generateUniqueId();
    this.chatContainer.innerHTML += this.chatStripe(false, data.get('prompt').toString());

    this.form.reset();

    const uniqueId = this.generateUniqueId();
    this.chatContainer.innerHTML += this.chatStripe(true, " ", uniqueId);

    this.chatContainer.scrollTop = this.chatContainer.scrollHeight;

    const messageDiv = document.getElementById(uniqueId)!;

    this.loader(messageDiv);

    const response = await fetch('http://localhost:5004', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        prompt: data.get('prompt'),
        model: 'text-davinci-003'
      })
    })

    clearInterval(this.loadInterval);
    messageDiv.innerHTML = " ";

    if (response.ok) {
      const data = await response.json();
      const parsedData = data.bot.trim();

      this.typeText(messageDiv, parsedData);
    } else {
      const err = await response.text();

      messageDiv.innerHTML = "Something went wrong";
      alert(err);
    }
  }
  onPromptClicked(prompt: string) {
    const promptInput = this.form?.elements.namedItem('prompt') as HTMLInputElement;
    if (promptInput) {
      promptInput.value = prompt;
    }
  }
  @HostListener('document:keydown.enter', ['$event'])
  onKeydownHandler(event: KeyboardEvent) {
    // Check if the key pressed is the enter key
    if (event.key === 'Enter') {
      // Toggle the value of the isShowDivIf variable to false
      this.isShowDivIf = !this.isShowDivIf;
    }
  }
}
