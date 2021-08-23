import {Directive, HostBinding, Input, OnChanges, OnDestroy, OnInit, SimpleChanges} from '@angular/core';

@Directive({
  selector: '[typingAnimation]'
})
export class TypingAnimationDirective implements OnInit, OnChanges, OnDestroy {

  @Input() listOfWords: string[];
  @Input() msDelay: number;
  @Input() msDelayAfterFinishWriting: number;

  @HostBinding('innerHTML')
  private shownWord: string;

  private wordIndex: number;
  private eraseMode: boolean;
  private interval: any;

  constructor() {
    this.listOfWords = ['I', 'Love', 'Cats'];
    this.wordIndex = 0;
    this.eraseMode = false;
    this.shownWord = '';
    this.msDelay = 100;
    this.msDelayAfterFinishWriting = 2000;
  }

  get writingComplete(): boolean {
    const currentWordLettersCount = this.listOfWords[this.wordIndex].length;
    const shownWordLettersCount = this.shownWord.length;
    return shownWordLettersCount >= currentWordLettersCount;
  }

  get eraseComplete(): boolean {
    return this.shownWord.length <= 0;
  }

  ngOnInit(): void {
    this.updateShownWord();
    this.setTypingInterval();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (!changes.listOfWords || changes.listOfWords.firstChange) {
      return;
    }

    this.shownWord = '';
  }

  private setTypingInterval() {
    this.interval = setInterval(() => this.updateShownWord(), this.msDelay)
  }

  private updateShownWord(): void {
    if (this.eraseMode) {
      this.handleErase();
      return;
    }
    this.handleWrite();
  }

  private writeLetter(): void {
    const currentWordLetters = this.listOfWords[this.wordIndex].split('');
    const letterToWrite = currentWordLetters[this.shownWord.length];
    this.shownWord += letterToWrite;
  }

  private eraseLetter(): void {
    this.shownWord = this.shownWord.slice(0, -1);
  }

  private handleWrite() {
    if (this.writingComplete){
      clearInterval(this.interval);
      setTimeout(() => this.setTypingInterval(), this.msDelayAfterFinishWriting);
      this.eraseMode = true;
      return;
    }
    this.writeLetter();
  }

  private handleErase() {
    if (this.eraseComplete) {
      this.wordIndex = this.wordIndex >= this.listOfWords.length - 1 ? 0 : this.wordIndex + 1;
      this.eraseMode = false;
      return;
    }
    this.eraseLetter();
  }

  ngOnDestroy(): void {
    clearInterval(this.interval);
  }
}
